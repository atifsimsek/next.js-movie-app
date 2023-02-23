import Movies from '@/components/Movies'

const page = async ({ params }) => {

    const keyword = params.keyword

    const apiUrl = "https://api.themoviedb.org/3"

    const res = await fetch(`${apiUrl}/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&include_adult-false`)

    const data = await res.json()

    

    return (
        <div>
            {
                data?.results ?
                    (
                        <div className='text-2xl flex items-center justify-center h-screen '>
                           <h2 className='h-3/6'> Opss hiçbir şey bulunumadı, farklı bir arama deneyin.</h2>
                        </div>
                    )
                    :
                    (
                        <div className='flex flex-wrap justify-center gap-3'>
                            {
                                data?.results.map((dt, index) => (
                                    <Movies key={index} dt={dt} />
                                ))
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default page