import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

type searchParamsProps = {
  searchParams: {
    genre: string;
  };
};

export default async function Home({ searchParams }: searchParamsProps) {
  const genre = searchParams.genre || "latest";
  console.log(genre);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${
      genre === "topics" ? "top_rated" : "popular"
    }?api_key=${API_KEY}&language=en&page=1`
  );

  const data = await res.json();
  // const resultado = data.results;

  console.log(data.results);

  return (
    <main className="px-4 sm:px-40 mt-8">
      <h1>Home</h1>
      <Results resultados={data.results} />
    </main>
  );
}
