import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-2xl mt-10 w-full relative  bg-slate-500   md:h-[300px] rounded-lg">
      {children}
    </div>
  );
};

export default Card;
