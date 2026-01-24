import React from "react";
import Navbar from "../navbar/Navbar";

import { Search } from "lucide-react";
import { SearchInput } from "./SearchInput";
import WhyChoosingUs from "../whyChoosingUs/WhyChoosingUs";

const Hero = () => {
  return (
    <section className='bg-[url("assets/images/hero-bg.png")] w-full h-screen bg-no-repeat bg-size-[100%_100%] bg-center'>
      <Navbar />
      <div className="flex flex-col gap-5 mt-8">
        <h1 className="text-white capitalize text-center w-77.5 mx-auto md:w-auto">
          Make your interior more <br className="hidden md:block"/>
          minimalistic & modern
        </h1>

        <h4 className="text-white text-center opacity-60 w-77.5 mx-auto md:w-auto">
          Turn your room with panto into a lot more minimalist <br className="hidden md:block"/> and modern
          with ease and speed
        </h4>

        <SearchInput
          variant="glass"
          rounded="full"
          size="lg"
          className="w-65 md:w-[320px] mx-auto mt-2"
        />
      </div>   
    </section>
    
  );
};

export default Hero;
