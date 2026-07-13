import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carrousel() {
  const listaImagenes = [
    "miles-morales.jpg",
    "spidercat.jpg",
    "pantera-negra.jpg",
    "satoru-gojo.jpg",
  ];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs mt-16"
    >
      <CarouselContent className="-mt-1 h-[270px]">
        {listaImagenes.map((img, index) => (
          <CarouselItem key={index} className="basis-1/2 pt-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">
                    <img src={img} alt="" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-green-500 bg-green-100" />
      <CarouselNext className="text-green-500 bg-green-100" />
    </Carousel>
  );
}
