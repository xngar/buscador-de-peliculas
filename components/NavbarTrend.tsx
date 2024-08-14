"use client";
import React from "react";
import NavbarTrenItem from "./NavbarTrenItem";
import { usePathname } from "next/navigation";

const NavbarTrend = () => {
  const vinculo = usePathname();
  console.log(vinculo);
  return (
    <div className="bg-yellow-400 flex justify-center gap-8 font-bold p-2 dark:bg-yellow-700 dark:text-white">
      <NavbarTrenItem titulo="Trending" dire="trendings" />
      <NavbarTrenItem titulo="Top Topic" dire="topics" />
    </div>
  );
};

export default NavbarTrend;
