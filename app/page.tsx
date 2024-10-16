import FliReact from "@/components/FliReact";
import Results from "@/components/Results";
import Sliderb from "@/components/Sliderb";
import Image from "next/image";
import { Suspense } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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
    <Suspense>
      <main className="px-4 sm:px-40 mt-8">
        <div>
          <h1 className="text-2xl font-extrabold">Peliculas Populares</h1>
          <Sliderb popular={data.results} />
        </div>
        <Results resultados={data.results} />
      </main>
    </Suspense>
  );
}
