import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";

type Props = {
    id?: string;
    keywords?: string;
}

const CarouselBannerWrapper = async ({ id, keywords }: Props) => {

    const movie = await getDiscoverMovies(id, keywords)

    return (
        <CarouselsBanner movies={movie} />
    )
}

export default CarouselBannerWrapper;