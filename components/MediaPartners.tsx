// "use client";

// import React from "react";
// import { media } from "@/data";

// // Define the type for a company object
// interface MediaProps {
//   id: number;
//   name: string;
//   img: string;
//   title: string;
// }

// const MediaPartners: React.FC = () => {
//   // Helper function to split companies into rows
//   const getRows = (companies: MediaProps[]): MediaProps[][] => {
//     const rows: MediaProps[][] = [];
//     let start = 0;
//     let count = 5;

//     while (start < companies.length) {
//       rows.push(companies.slice(start, start + count));
//       start += count;
//       count -= 1;
//     }

//     return rows;
//   };

//   const rows = getRows(media);

//   return (
//     <section id="testimonials" className="mt-10 md:mt-11 lg:mt-32">
//       <h1 className="heading">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//           Media Partners
//         </span>
//       </h1>

//       <div className="flex flex-col items-center max-lg:mt-10 pt-20">
//         <div className="flex flex-col items-center gap-16 mb-20">
//           {rows.map((row, rowIndex) => (
//             <div
//               key={rowIndex}
//               className={`flex flex-wrap justify-center gap-10 row-${rowIndex}`}
//             >
//               {row.map((company) => (
//                 <React.Fragment key={company.id}>
//                   <div className="flex flex-col items-center w-1/3 md:w-auto gap-2">
//                     <img
//                       src={company.img}
//                       alt={company.name}
//                       className="md:w-20 w-16 md:h-16 h-12 bg-white"
//                     />
//                     <h1 className="text-center md:w-24 w-20">
//                       {company.title}
//                     </h1>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MediaPartners;

"use client";

import React from "react";
import { media } from "@/data";
import InfiniteScroller from "./InfiniteScroller";
import Image from "next/image";

const MediaPartners: React.FC = () => {
  return (
    <section id="testimonials" className="mt-10 md:mt-11 lg:mt-32">
      <h1 className="heading">
        Our &nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Media Partners
        </span>
      </h1>

      <div className="flex flex-row items-center max-lg:mt-10 pt-20 overflow-x-auto">
        <InfiniteScroller speed="normal">
          <div className="flex flex-nowrap items-center gap-16 mb-20">
            {media.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex flex-col items-center w-1/3 md:w-auto gap-2">
                  <Image
                    src={company.img}
                    alt={company.name}
                    className="md:w-15 w-16 md:h-16 h-12 rounded-full"
                    // className="rounded-full"
                    style={{
                      objectFit: "cover",
                    }}
                    height={80}
                    width={80}
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

export default MediaPartners;
