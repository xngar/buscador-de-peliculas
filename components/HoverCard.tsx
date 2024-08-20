import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Info } from "lucide-react";

const HoverCardMovie = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div>
          <Info />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardMovie;
