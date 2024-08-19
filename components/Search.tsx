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
    <form className="flex px-4 mt-3 " onSubmit={HandleSubmit}>
      <input
        type="text"
        className="w-full outline-none placeholder-gray-400 h-10 bg-slate-300 mr-2 rounded-md"
        placeholder="Ingrese la pelicula a buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="busqueda"
      />
      <button
        type="submit"
        className="text-black font-bold bg-yellow-400 p-2 rounded-md hover:bg-yellow-200 disabled:bg-gray-400 disabled:text-gray-600"
        disabled={!search}
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
