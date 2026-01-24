import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { ProductCard } from "./ProductCard"
import Autoplay from "embla-carousel-autoplay"

export function ProductCarousel({ products }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
 console.log(plugin.current, plugin.current.reset, plugin.current.play);

  return (
    <Carousel
    opts={{
    align: "start",
    loop: true,
  }}
    plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.play}
    className="max-w-300 ">

      <CarouselContent className="-ml-6">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-6 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-white border-none cursor-pointer w-10 h-10"/>
      <CarouselNext  className="bg-white border-none cursor-pointer w-10 h-10"/>
    </Carousel>
  )
}
