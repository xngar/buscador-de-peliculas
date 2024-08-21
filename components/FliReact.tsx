"use client";
import React from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

const FliReact = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  return (
    <Flicking plugins={plugins}>
      <div>q</div>
      <div>v</div>
    </Flicking>
  );
};

export default FliReact;
