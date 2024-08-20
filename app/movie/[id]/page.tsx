import Image from "next/image";
import React, { Suspense } from "react";

type movieParams = {
  params: {
    id: string;
  };
};

const MoviePage = async ({ params }: movieParams) => {
  const info = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const data = await info.json();
  console.log(data);

  return (
    <Suspense>
      <div>
        {data.original_title}

        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="poster"
          width={500}
          height={300}
        />
      </div>
    </Suspense>
  );
};

export default MoviePage;
