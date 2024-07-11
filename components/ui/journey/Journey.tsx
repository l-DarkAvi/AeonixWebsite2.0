"use client";

import React, { useEffect } from "react";
import Image from "next/image"; // Import Image component from Next.js

import sucess0 from "/public/journey/sucess0.jpg";
import sucess11 from "/public/journey/sucess11.jpg";

import "./Journey.css";
import Carousel from "./Crousel";

const Journey = () => {
  useEffect(() => {
    const delay = 1000; // 3 seconds

    const tooltips = document.querySelectorAll(".graph-point .tooltip");

    const animateTooltips = () => {
      tooltips.forEach((tooltip, index) => {
        setTimeout(() => {
          tooltip.classList.add("tooltip-animate");
        }, index * delay);
      });
    };

    animateTooltips();
  }, []);

  return (
    <>
      <div className="mt-11">
        <h1 className="heading">
          {" "}
          Our &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Journey
          </span>
        </h1>
        <div className="inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_40%,#1A237E_50%,#393BB2_60%,#E2CBFF_100%)] mt-11 rounded-md">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Journey;
