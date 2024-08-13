import React from "react";
import Link from "next/link";

interface MenuProps {
  dire: string;
  titulo: string;
  icon: React.ReactNode;
}

const MenuItem = ({ dire, titulo, icon }: MenuProps) => {
  return (
    <Link href={dire} className="flex gap-3 items-center">
      <div className="hover:text-orange-600 ">{icon}</div>
      <p className="hidden md:inline uppercase text-sm hover:text-blue-900">
        {titulo}
      </p>
    </Link>
  );
};

export default MenuItem;
