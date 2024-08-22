import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Play } from "lucide-react";
import { ModalProps } from "@/lib/types";

const ModalTrailer = ({ idTrailer }: ModalProps) => {
  const direccion = `https://www.youtube.com/embed/${idTrailer}`;

  return (
    <Dialog>
      <DialogTrigger className="flex p-2">
        <Play />
        <p>Reproducir Trailer</p>
      </DialogTrigger>
      <DialogContent className="max-w-4xl  p-4">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <div className="w-full h-96  relative">
              <iframe
                width="800"
                height="700"
                src={direccion}
                title="Deadpool &amp; Wolverine | Tráiler Oficial | Doblado"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTrailer;
