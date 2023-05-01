import Movies from "@/components/Movies";
import { getMovies } from "@/services/service";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {
  const data = await getMovies(searchParams);

  return (
    <main className="flex gap-3 flex-wrap justify-center">
      {data.results.map((dt, index) => (
        <Movies key={index} dt={dt} />
      ))}
    </main>
  );
}
