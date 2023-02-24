import Movies from '@/components/Movies'
import { getSearch } from '@/services/service'
import { DEV_CLIENT_PAGES_MANIFEST } from 'next/dist/shared/lib/constants'

const page = async ({ params }) => {

    const keyword = params.keyword

    const data = await getSearch(keyword)

    return (
        <div>
            {
                !data?.results ?
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