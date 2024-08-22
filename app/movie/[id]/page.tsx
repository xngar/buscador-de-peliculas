import ChartMovie from "@/components/ChartMovie";
import Emoticons from "@/components/Emoticons";
import HoverCardMovie from "@/components/HoverCard";
import ModalTrailer from "@/components/ModalTrailer";

import Image from "next/image";
import React, { Suspense } from "react";

type movieParams = {
  params: {
    id: string;
  };
};

const MoviePage = async ({ params }: movieParams) => {
  const info = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await info.json();
  console.log(data);

  const trailer = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return (
    <div className="flex flex-col px-4 md:flex-row md:px-40 mt-8 bg-slate-800 py-8 gap-6">
      <div className="flex justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt="poster"
          width={300}
          height={200}
          className="rounded-lg shadow-lg object-cover"
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          priority
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl text-white text-center mb-8">
          {data.original_title}
        </h1>
        {/* PUNTUACION */}
        <div className="flex gap-8 items-center flex-col md:flex-row ">
          <ChartMovie voto={data.vote_average} />
          <div>
            <span className="font-bold text-white text-center text-wrap text-lg">
              Puntuación de usuario
            </span>
          </div>
          <div>
            <Emoticons />
          </div>
          <div className="flex w-auto gap-2 h-10 items-center bg-blue-900 p-2 rounded-full text-white">
            <span className="  text-lg md:text-sm">¿Cuál es tu vibra?</span>
            <HoverCardMovie />
          </div>
        </div>
        <div className="flex  mt-8 bg-yellow-400 rounded-full w-fit p-2  mx-auto md:ml-0">
          <ModalTrailer />
        </div>
        <div className="mt-10">
          <h2 className="text-white text-3xl">Vista General</h2>
          <p className="text-white text-1xl leading-relaxed mt-4 text-justify">
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
