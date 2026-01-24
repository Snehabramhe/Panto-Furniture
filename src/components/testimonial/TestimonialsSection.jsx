import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TestimonialCard } from "./TestimonialCard";

import Autoplay from "embla-carousel-autoplay";

import chair10 from "../../assets/images/chair-10.png";
import chair11 from "../../assets/images/chair-11.png";
import chair12 from "../../assets/images/chair-12.png";
import user1 from "../../assets/users/user-1.png";
import user2 from "../../assets/users/user-2.png";
import user3 from "../../assets/users/user-3.png";

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  console.log(plugin.current, plugin.current.reset, plugin.current.play);
  const testimonials = [
    {
      bgImage: chair10,
      avatar: user1,
      name: "Bang Upin",
      role: "Pedagang Asongan",
      review:
        "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    },
    {
      bgImage: chair11,
      avatar: user2,
      name: "Ibuk Sukijan",
      role: "Ibu Rumah Tangga",
      review:
        "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    },
    {
      bgImage: chair12,
      avatar: user3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    },
    {
      bgImage: chair11,
      avatar: user3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    },
    {
      bgImage: chair12,
      avatar: user3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    },
    {
      bgImage: chair10,
      avatar: user3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    },
  ];

  return (
    <section className="py-24 text-center">
      <h5 className="text-orange-500 uppercase tracking-wide">Testimonials</h5>

      <h2 className="text-4xl font-bold mt-2">Our Client Reviews</h2>

      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        className="mt-16 container mx-auto"
      >
        <CarouselContent className="mx-auto">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="px-6 md:px-4 lg:px-6 basis-full md:basis-1/3"
            >
              <TestimonialCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-white border-none  cursor-pointer w-10 h-10 top-1/3 left-1"/>
        <CarouselNext className="bg-white border-none  cursor-pointer w-10 h-10 top-1/3 right-1" />
      </Carousel>
    </section>
  );
}
