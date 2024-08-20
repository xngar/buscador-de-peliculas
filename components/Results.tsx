import React, { Suspense } from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

type Movie = {
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  name: string;
  release_date: string;
  id: string;
  // Otras propiedades que te interese mostrar
};

type ResultadoProps = {
  resultados: Movie[];
};

const Results = ({ resultados }: ResultadoProps) => {
  return (
    <div className="md:grid-cols-2 md:grid sm:grid-cols-1 lg:grid-cols-4 gap-6  space-y-3 max-w-6xl">
      {resultados.map((mapeo, index) => (
        <Card key={index}>
          <Link href={`/movie/${mapeo.id}`}>
            <h1 className="text-lg font-bold">
              {mapeo.original_title || mapeo.name}
            </h1>
            <p className="line-clamp-2">{mapeo.overview}</p>
            {/* poster_path */}
            <div className=" w-full">
              <Image
                src={`https://image.tmdb.org/t/p/original/${mapeo.backdrop_path}`}
                alt=""
                width={800}
                height={300}
                className="hover:opacity-55"
              />
              <p>{mapeo.release_date}</p>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Results;
