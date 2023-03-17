"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Movies =  ({ dt }) => {
    const router = useRouter()

    
    return (
        <div onClick={()=> router.push(`/movie/${dt?.id}`)} className="w-[450px] h-[300px] relative group cursor-pointer ">
            <Image sizes="(max-width: 450px)" alt={`${dt?.title}`} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} fill={true} />
            <div className="absolute text-white bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 ">
                <h4 className="text-2xl font-bold">{dt?.title}</h4>
                <p >{dt?.release_date}-{dt?.vote_average}</p>
            </div>
            <div className="w-full h-full bg-black absolute inset-0 opacity-0 group-hover:opacity-40"></div>
        </div>
    )
}

export default Movies