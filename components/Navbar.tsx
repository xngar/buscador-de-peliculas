import React from "react";
import MenuItem from "./MenuItem";
import { House, BadgeInfo } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-300 dark:bg-slate-700 flex p-4 md:px-40 ">
      <div className="flex-1">
        <Link href={"/"}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="Logo IMDB"
            width={100}
            height={100}
            className="dark:invert"
          />
        </Link>
      </div>
      <div className="max-w-[500px] min-w-[50px] flex   md:justify-around gap-7  ">
        <MenuItem dire="/" titulo="Home" icon={<House />} />
        <MenuItem dire="/about" titulo="About" icon={<BadgeInfo />} />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
