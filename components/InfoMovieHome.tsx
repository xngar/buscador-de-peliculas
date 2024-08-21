import React from "react";
import { CircleEllipsis } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type InfoPeliProps = {
  infoPeli: string;
};

const InfoMovieHome = ({ infoPeli }: InfoPeliProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <CircleEllipsis className=" text-white hover:text-yellow-400 transition-all duration-200" />
      </PopoverTrigger>
      <PopoverContent className="text-justify p-5 text-sm">
        {infoPeli}
      </PopoverContent>
    </Popover>
  );
};

export default InfoMovieHome;
