import Movies from "@/components/Movies"

export default async function Home({ searchParams }) {

  const apiUrl = "https://api.themoviedb.org/3"

  const res = await fetch(`${apiUrl}/${searchParams.genre ? "movie/" + searchParams.genre : "/trending/all/day"}?api_key=${process.env.API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } })

  const data = await res.json()


  return (
    <main className="flex gap-3 flex-wrap justify-center"  >
      {
         data.results.map((dt, index) => (
          <Movies key={index} dt={dt} />
        ))
      }
    </main>
  )
}
