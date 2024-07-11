"use client";

import React from "react";
import { companies } from "@/data";
import InfiniteScroller from "./InfiniteScroller";
import Image from "next/image";

const Companies: React.FC = () => {
  return (
    <section id="" className="mt-10 md:mt-11 lg:mt-32">
      <h1 className="heading">
        {" "}
        Our &nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Clients
        </span>
      </h1>

      <div className="flex flex-row items-center max-lg:mt-10 pt-20 overflow-x-auto">
        <InfiniteScroller speed="normal">
          <div className="flex flex-nowrap items-center gap-16 mb-20">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex flex-col items-center w-1/3 md:w-auto gap-2">
                  <img
                    src={company.img}
                    alt={company.name}
                    // className="md:w-15 w-16 md:h-16 h-12 lg:w-24 lg:h-24"
                    style={{
                      objectFit: "cover",
                    }}
                    height={50}
                    width={50}
                  />
                  <h1 className="text-center md:w-24 w-20">{company.title}</h1>
                </div>
              </React.Fragment>
            ))}
          </div>
        </InfiniteScroller>
      </div>
    </section>
  );
};

export default Companies;
