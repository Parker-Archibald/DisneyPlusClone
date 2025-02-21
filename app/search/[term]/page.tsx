import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

const Search = async ({ params }: { params: Promise<{ term: string }> }) => {

    const term = (await params).term

    if (!term) notFound();

    const termToUse = decodeURI(term);

    // get search movies
    const movies = await getSearchedMovies(termToUse)

    // get popular movies
    const popularMovies = await getPopularMovies()

    return (
        <div className="max-w-7xl mx-auto pb-20">

            <div className="flex flex-col space-y-4 md:mt-24">
                <h1 className="text-4xl md:text-6xl font-bold px-10 py-8">Results for {termToUse}</h1>
                <MoviesCarousel title="Movies" movies={movies} isVertical />
                <MoviesCarousel title="You may also like" movies={popularMovies} />
            </div>
        </div>
    )
}

export default Search