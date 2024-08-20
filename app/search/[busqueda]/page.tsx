import Results from "@/components/Results";
import React, { Suspense } from "react";

type searchProps = {
  params: {
    busqueda: string;
  };
};

const Search = async ({ params }: searchProps) => {
  const searchItems = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.busqueda}&languaje=en-US&page=1&include-adult=false`
  );

  const data = await searchItems.json();
  const resultados = data.results;
  return (
    <Suspense>
      <div className="px-4 sm:px-40 mt-8">
        {resultados &&
          resultados.length ===
          (
            <div>
              <p>No hay resultado</p>
            </div>
          )}

        {resultados && <Results resultados={resultados} />}
      </div>
    </Suspense>
  );
};

export default Search;
