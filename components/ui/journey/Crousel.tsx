// import { crouselSlides, crouselTexts, crouselTitle } from "@/data";
// import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === crouselSlides.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? crouselSlides.length - 1 : prev - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full p-4">
//       <div className="flex">
//         {/* Carousel wrapper */}
//         <div className="relative w-1/2 h-56 overflow-hidden rounded-lg md:h-96">
//           {crouselSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//                 currentSlide === index ? "opacity-100" : "opacity-0"
//               }`}
//               data-carousel-item
//             >
//               <img
//                 src={slide}
//                 alt={`Slide ${index + 1}`}
//                 className="absolute block w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Content wrapper */}
//         <div className="w-1/2 p-4">
//           <h1 className="text-2xl font-bold mb-2">
//             {crouselTitle[currentSlide]}
//           </h1>
//           <p className="text-white">{crouselTexts[currentSlide]}</p>
//         </div>
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {crouselSlides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${
//               currentSlide === index ? "bg-white" : "bg-gray-300"
//             }`}
//             aria-current={currentSlide === index}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>

//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={prevSlide}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-60">
//           <svg
//             className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={nextSlide}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-60">
//           <svg
//             className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import { crouselSlides, crouselTexts, crouselTitle } from "@/data";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === crouselSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? crouselSlides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full p-4">
      <div className="flex flex-col md:flex-row">
        {/* Carousel wrapper */}
        <div className="relative w-full md:w-1/2 h-56 md:h-96 overflow-hidden rounded-lg">
          {crouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="absolute block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content wrapper */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            {crouselTitle[currentSlide]}
          </h1>
          <p className="text-sm md:text-base text-white">
            {crouselTexts[currentSlide]}
          </p>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {crouselSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-60">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none opacity-60">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
