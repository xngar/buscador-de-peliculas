import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow w-full h-[300px] bg-slate-500 p-3">{children}</div>
  );
};

export default Card;
