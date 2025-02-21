import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

const Genre = async ({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ genre: string }> }) => {

    const p = (await params)
    const g = (await searchParams)

    const movies = await getDiscoverMovies(p.id)

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 md:mt-24">
                <h1 className="text-4xl md:text-6xl font-bold px-10 py-8">Results for {g.genre}</h1>

                <MoviesCarousel title='Genre' movies={movies} isVertical />
                <MoviesCarousel title='Suggested Movies' movies={movies} />
            </div>
        </div>
    )
}

export default Genre;