const apiUrl = "https://api.themoviedb.org/3/"

export const getMovies = async (searchParams) => {
    const res = await fetch(`${apiUrl}/${searchParams.genre ? "movie/" + searchParams.genre : "/trending/all/day"}?api_key=${process.env.API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } })
    return await res.json()
}

export const getMovie = async (id) => {
    const res = await fetch(`${apiUrl}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
    return await res.json()
}

export const getSearch = async (keyword) => {
    const res = await fetch(`${apiUrl}search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&include_adult-false`)
    return await res.json()

}

