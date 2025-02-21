import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className=" pb-20 relative">
      {/* Carousel Wrapper */}
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        {/* Movie Types */}
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>

      <p className="absolute bottom-8 left-12">For portfolio use only</p>
    </main>
  );
}
