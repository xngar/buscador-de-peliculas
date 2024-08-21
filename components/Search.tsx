"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const router = useRouter();
  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form className="flex  mt-3 relative px-20 " onSubmit={HandleSubmit}>
      <input
        type="text"
        className="w-full outline-none placeholder-gray-400 h-10 bg-slate-300 mr-2 rounded-full placeholder:px-10  focus:pl-10 focus:placeholder-opacity-0"
        placeholder="Ingrese la pelicula a buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="busqueda"
      />
      <button
        type="submit"
        className=" font-bold bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full hover:bg-yellow-200 disabled:bg-gray-400 disabled:text-gray-600 -ml-10 text-white"
        disabled={!search}
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
