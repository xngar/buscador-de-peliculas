import React from "react";

type searchProps = {
  params: {
    busqueda: string;
  };
};

const Search = async ({ params }: searchProps) => {
  const searchItems = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.busqueda}`
  );

  return <div>{params.busqueda}</div>;
};

export default Search;
