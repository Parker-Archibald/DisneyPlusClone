'use client'

import getImagePath from "@/lib/getImagePath"
import { Movie } from "@/typings"
import Image from "next/image"
import {useRouter} from 'next/navigation'


const MovieCard = ({ movie }: { movie: Movie }) => {

    const router = useRouter();

    return (
        <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg" onClick={() => router.push(`/movie/${movie.id}`)}>

            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1a1c29]/80 z-10" />

            <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
            <Image src={getImagePath(movie.backdrop_path || movie.poster_path)} alt='' width={1920} height={1080} className="w-fit min-w-[360px] md:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm" />
        </div>
    )
}
export default MovieCard