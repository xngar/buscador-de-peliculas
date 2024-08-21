import React, { Suspense } from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import { url } from "inspector";
import InfoMovieHome from "./InfoMovieHome";

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
    <div className="md:grid-cols-2 md:grid sm:grid-cols-1 lg:grid-cols-5 gap-10  space-y-10  max-w-6xl">
      {resultados.map((mapeo, index) => (
        <Card key={index}>
          <div className="absolute flex justify-end items-end w-full p-2">
            <InfoMovieHome infoPeli={mapeo.overview} />
          </div>
          <Link href={`/movie/${mapeo.id}`}>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${mapeo.poster_path})`,
              }}
              className="bg-cover flex flex-col items-center  rounded-lg"
            >
              <h1 className="text-lg font-bold truncate ">
                {/* {mapeo.original_title || mapeo.name} */}
              </h1>
              {/* <p className="line-clamp-2">{mapeo.overview}</p> */}
              {/* poster_path */}
              <div className=" w-full h-[300px]">
                {/* <Image
                  src={`https://image.tmdb.org/t/p/original/${mapeo.poster_path}`}
                  alt=""
                  width={800}
                  height={300}
                  className="hover:opacity-55"
                /> */}
                {/* <p className="">{mapeo.release_date}</p> */}
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Results;
