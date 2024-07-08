"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import aeLogo from "../../public/newLogoAe-removebg-preview.png";
import { HiMenu, HiX } from "react-icons/hi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          position: "relative",
        }}
      >
        <Image src={aeLogo} alt="Logo" className="h-10 w-10 mr-4" />
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>

      <div className="md:hidden fixed top-10 left-0 right-0 flex justify-between items-center px-5 py-5 z-[5000]">
        <Image src={aeLogo} alt="Logo" className="h-10 w-10" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="fixed top-5 right-5 bg-slate-950  text-white p-3 rounded-lg z-[4999] mt-10"
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={navItem.link}
              className={cn(
                "block py-2 px-3 text-center dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-lg !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import aeLogo from "../../public/newLogoAe-removebg-preview.png";
// import { HiMenu, HiX } from "react-icons/hi";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         // also set true for the initial state
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-5 z-[5000]",
//           className,
//           "bg-opacity-75 backdrop-blur-lg shadow-md"
//         )}
//         style={{
//           borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         <Image src={aeLogo} alt="Logo" className="h-10 w-10" />
//         <div className="hidden md:flex items-center space-x-4 ml-auto">
//           {navItems.map((navItem, idx) => (
//             <Link
//               key={`link-${idx}`}
//               href={navItem.link}
//               className={cn(
//                 "relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//               )}
//             >
//               <span className="block">{navItem.icon}</span>
//               <span className="text-sm !cursor-pointer">{navItem.name}</span>
//             </Link>
//           ))}
//         </div>
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white"
//         >
//           {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//         </button>
//       </motion.div>

//       {menuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.2 }}
//           className="fixed top-16 left-0 right-0 bg-gray-800 text-white p-5 z-[4999]"
//         >
//           {navItems.map((navItem, idx) => (
//             <Link
//               key={`mobile-link-${idx}`}
//               href={navItem.link}
//               className={cn(
//                 "block py-2 text-center dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//               )}
//               onClick={() => setMenuOpen(false)}
//             >
//               <span className="text-lg !cursor-pointer">{navItem.name}</span>
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };
