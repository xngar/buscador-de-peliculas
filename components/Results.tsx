import React from "react";

type Movie = {
  original_title: string;
  // Otras propiedades que te interese mostrar
};

type ResultadoProps = {
  resultados: Movie[];
};

const Results = ({ resultados }: ResultadoProps) => {
  return (
    <div>
      {resultados.map((mapeo) => (
        <div>{mapeo.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
