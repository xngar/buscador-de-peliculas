import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="shadow w-full  bg-slate-500 p-3">{children}</div>;
};

export default Card;
