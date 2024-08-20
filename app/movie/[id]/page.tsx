import ChartMovie from "@/components/ChartMovie";
import Emoticons from "@/components/Emoticons";
import HoverCardMovie from "@/components/HoverCard";

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

  return (
    <div className="flex px-40 mt-8 bg-slate-800 py-8 gap-6">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="poster"
          width={500}
          height={300}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl text-white">{data.original_title}</h1>
        {/* PUNTUACION */}
        <div className="flex gap-4 items-center ">
          <ChartMovie voto={data.vote_average} />
          <div>
            <span className="font-bold">
              Puntuación
              <br /> de
              <br /> usuario
            </span>
          </div>
          <div>
            <Emoticons />
          </div>
          <div className="flex w-auto gap-2 h-10 items-center bg-blue-900 p-2 rounded-full text-white">
            <span className="  text-sm">¿Cuál es tu vibra?</span>
            <HoverCardMovie />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-white">Vista General</h2>
          <p className="text-white">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
