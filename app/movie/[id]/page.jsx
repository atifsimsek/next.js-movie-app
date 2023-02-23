import Image from "next/image"


const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
  return await res.json()
}

const page = async ({ params }) => {
  const id = params.id
  const movieDetail = await getMovie(id)


  return (
    <div className="relative p-7 min-h-screen">
      <Image className="object-cover" alt={`${movieDetail?.title}`} fill={true} src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path} `} />
      <div className="absolute">
        <h3 className="text-4xl font-bold my-3">{movieDetail?.title}</h3>
        <p className="w-1/2">{movieDetail?.overview}</p>
        <p className="my-3" >{movieDetail?.release_date} - {movieDetail?.vote_average}</p>
        <button className=" my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black ">Trail</button>
      </div>
      </div>
  )
}

export default page