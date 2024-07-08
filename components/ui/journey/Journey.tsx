"use client";

import React, { useEffect } from "react";
import Image from "next/image"; // Import Image component from Next.js

import sucess0 from "/public/journey/sucess0.jpg";
import sucess11 from "/public/journey/sucess11.jpg";

import "./Journey.css";

const Journey = () => {
  useEffect(() => {
    // Delay between tooltip animations
    const delay = 1000; // 3 seconds

    // Select all tooltips
    const tooltips = document.querySelectorAll(".graph-point .tooltip");

    // Function to animate tooltips with delay
    const animateTooltips = () => {
      tooltips.forEach((tooltip, index) => {
        setTimeout(() => {
          tooltip.classList.add("tooltip-animate");
        }, index * delay);
      });
    };

    // Start animation when component mounts
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
        <div className="graph-container my-36">
          <div className="graph-line">
            <div className="graph-point">
              <span>2020</span>
              <div className="tooltip">
                <Image src={sucess0} alt="2020" />
                <div className="tooltip-content">
                  From nothing but a vision in 2020, we embarked on a journey.
                  Through passion and perseverance, we built our dream into
                  reality.
                </div>
              </div>
            </div>
            <div className="graph-point">
              <span>2021</span>
              <div className="tooltip">
                <Image src={sucess11} alt="2020" />
                <div className="tooltip-content">
                  Even in our struggles and setbacks, we never lost hope,
                  emerging stronger to deliver numerous successful IoT projects.
                </div>
              </div>
            </div>
            <div className="graph-point">
              <span>2022</span>
              <div className="tooltip">
                <Image src={sucess0} alt="2020" />
                <div className="tooltip-content">
                  {" "}
                  This year marked our expansion into new markets, building
                  robust partnerships and launching innovative solutions.
                </div>
              </div>
            </div>
            <div className="graph-point">
              <span>2023</span>
              <div className="tooltip">
                <Image src={sucess0} alt="2020" />
                <div className="tooltip-content">
                  {" "}
                  With relentless dedication, we achieved record-breaking growth
                  and established ourselves as industry leaders.
                </div>
              </div>
            </div>
            <div className="graph-point">
              <span>2024</span>
              <div className="tooltip">
                <Image src={sucess0} alt="2020" />
                <div className="tooltip-content">
                  {" "}
                  Our journey continues as we innovate and inspire, pushing the
                  boundaries of what's possible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
