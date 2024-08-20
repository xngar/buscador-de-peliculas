"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type NavbarTrenItemProps = {
  titulo: string;
  dire: string;
};

const NavbarTrenItem = ({ titulo, dire }: NavbarTrenItemProps) => {
  const genre = useSearchParams().get("genre");
  console.log(genre);

  return (
    <Suspense>
      <Link
        className={`hover:text-orange-700 ${
          genre === dire
            ? "underline decoration-orange-600 underline-offset-8 decoration-4 "
            : ""
        } `}
        href={`/?genre=${dire}`}
      >
        {titulo}
      </Link>
    </Suspense>
  );
};

export default NavbarTrenItem;
