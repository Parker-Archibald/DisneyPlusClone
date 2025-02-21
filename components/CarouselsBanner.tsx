'use client'
import { Movie } from "@/typings";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import getImagePath from "@/lib/getImagePath";

type Props = {
    movies: Movie[];
}

Autoplay.globalOptions = { delay: 8000 }

const CarouselsBanner = ({ movies }: Props) => {

    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 45 }, [Autoplay()])

    return (
        <div ref={emblaRef} className="overflow-hidden lg:-mt-40 relative cursor-pointer">
            <div className="flex">
                {movies.map(movie => (
                    <div key={movie.id} className="flex-full min-w-0 relative max-h-[90vh]">
                        <Image key={movie.id} src={getImagePath(movie.backdrop_path, true)} alt='' width={1920} height={1080} className="w-full" />

                        <div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-40 xl:pt-96 left-0 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 
                        to-transparent p-10 space-y-5 text-white">
                            <h2 className="text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
                            <p className="line-clamp-3 max-w-xl">{movie.overview}</p>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29] z-20 h-full mt-1" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarouselsBanner;