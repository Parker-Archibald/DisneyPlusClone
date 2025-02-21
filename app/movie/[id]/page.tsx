import { Button } from "@/components/ui/button";
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import MoviesCarousel from "@/components/MoviesCarousel";

const IndividualMovie = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    const options: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }

    const response = await fetch(url, options);
    const data = (await response.json());

    const suggestedUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
    const suggestedResponse = await fetch(suggestedUrl, options)
    const suggestedData = (await suggestedResponse.json());

    return (
        <div className="relative overflow-hidden lg:-mt-40 cursor-pointer">
            <div className="flex-full min-w-0 relative max-h-[90vh]">
                <Image src={getImagePath(data?.backdrop_path || data?.poster_path, true)} alt='' width={1920} height={1080} className="w-full max-h-[90vh] object-cover z-10" />
                <div className="absolute top-1 h-full w-full bg-gradient-to-b from-gray-100/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29] max-h-[90vh]" />

                <div className="absolute top-1/4 md:top-1/2 z-20 px-8 flex flex-col md:left-20 space-y-1 md:space-y-6">
                    <h2 className="text-3xl font-semibold tracking-wide md:text-6xl">{data?.title}</h2>
                    <div className="line-clamp-2 text-xs ml-1 md:ml-2 text-gray-300 max-w-lg">{data?.overview}</div>
                    <div className="flex space-x-0.5 text-xs md:text-lg text-gray-300 tracking-wide ml-1 md:ml-2">
                        <p className="">{new Date(data?.release_date).getFullYear()}</p>
                        <div className="">-</div>
                        <div className="">{Math.floor(data?.runtime / 60)}h {data.runtime % 60}m</div>
                        <div className="">-</div>
                        <div>{data?.genres[0]?.name}, {data?.genres[1]?.name}</div>
                    </div>
                    <div className="flex space-x-2 py-4 ml-1 md:ml-2 md:space-x-4">
                        <Button><PlayIcon />Play</Button>
                        <Button variant={'outline'} className="bg-gray-500/75 border-none">Trailer</Button>
                        <Button className="rounded-full w-4 h-8 bg-gray-500/75 text-white text-lg">+</Button>
                    </div>
                </div>
            </div>



            <div className="md:-mt-24 z-20 max-w-7xl mx-auto pb-20">
                <MoviesCarousel title="Similar Movies" movies={suggestedData.results} isVertical />
            </div>

        </div>
    )
}

export default IndividualMovie;