"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {" "}
          Testimonial
        </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;