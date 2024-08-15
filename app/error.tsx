"use client";
import React from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="w-full flex justify-center  items-center mt-10 flex-col px-3">
      <p> Tuvimos un problema, lo resolveremos pronto..</p>
      <button
        className="bg-blue-800 p-2 rounded-lg text-white "
        onClick={() => reset()}
      >
        Intentar denuevo
      </button>
    </div>
  );
};

export default Error;
