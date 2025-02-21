import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

const MoviesCarousel = async ({ title, movies, isVertical }: Props) => {



    return (
        <div className="relative">
            <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

            {!isVertical && (
                <div className="hidden lg:absolute left-0 top-0 bg-gradient-to-l from-gray-200/0 to-gray-300 dark:to-[#1a1c29]/80 z-10 w-[150px] h-full" />
            )}

            <div className={cn('flex overflow-x-scroll space-x-4 scrollbar-hide p-5 lg:px-10 relative', isVertical && 'flex-col space-x-0 space-y-12')}>
                {isVertical ? (
                    movies.map(movie => (
                        <div key={movie.id} className={cn(isVertical && 'flex flex-col space-y-5 mb-5 lg:flex-row items-start space-x-5')}>
                            <MovieCard movie={movie} />
                            <div className="max-w-2xl space-y-2">
                                <p className="font-bold">
                                    {movie.title} ({movie.release_date?.split('-')[0]})
                                </p>
                                <hr className="" />
                                <p className="line-clamp-5">{movie.overview}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    movies?.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}

            </div>

            {!isVertical && (
                <div className="hidden lg:absolute right-0 top-0 bg-gradient-to-r from-gray-200/0 to-gray-300 dark:to-[#1a1c29]/80 z-10 w-[100px] h-full " />
            )}

        </div>
    )
}

export default MoviesCarousel