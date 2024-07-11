import { title } from "process";
import teamImg from "../public/aeonixTeam2.png";
import { profile } from "console";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Products", link: "#products" },
  { name: "Services", link: "#sevices" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Aeonix pioneers AI, robotics, sustainable tech, and healthcare innovations, redefining industry standards and enhancing societal impact.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spareImg: "",
  },
  {
    id: 2,
    title: "Aeonix LLP pioneers solutions across diverse domains.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Every line of code and circuit we design brings us closer to a smarter, connected world. Let's keep pushing boundaries.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Automatic Vending Machine",
    des: "An IOT Enabled Vending Machine for Cloth Bags, Sanitary Napkins etc",
    img: "/productsImg/automaticVendingMachine.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://youtu.be/ICL0J5y9gqY?si=0Xj9jpf4DX3eGG5s",
  },
  {
    id: 2,
    title: "SPY-DRO",
    des: "A Surveillance Drone Controlled Over the Internet",
    img: "/productsImg/drone.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
  },
  {
    id: 3,
    title: "SUDO",
    des: "An AI & Computer Vision based Sudoku Solver Robot",
    img: "/productsImg/miniRobo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Smart E-Waste Bin",
    des: "An IOT Enabled Smart E-Waste Bin.",
    img: "/productsImg/smartEwasteBin.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://youtu.be/9hhAObtdqXM?si=q89ICfVYZKLioTvu",
  },
  {
    id: 5,
    title: "SPY-DER",
    des: "A speech & Web Controlled Surveillance Spider Robot.",
    img: "/productsImg/spider.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://youtu.be/3edXTxIZ_2U?si=lNiIy8gtKavg7ATf",
  },
  {
    id: 6,
    title: "WO-CARE",
    des: "An AI Based Women Safety Device.",
    img: "/productsImg/woCare.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 7,
    title: "Kinetic Wall",
    des: "Introducing the future of interactive art and technology: the Raspberry Pi Powered Interactive Kinetic Wall. In a world where creativity meets innovation, this groundbreaking project pushes the boundaries of traditional art and engineering.",
    img: "/productsImg/Kinetic wall.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 8,
    title: "PPG transmitter",
    des: "Smart Healthcare Monitoring System.",
    img: "/productsImg/ppg transmitter.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 9,
    title: "CURAFOOT",
    des: "Smart Feet Care System.",
    img: "/productsImg/bata.JPG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 10,
    title: "Sound Proff",
    des: "Anti Eavesdropping Mobile Phone Vault.",
    img: "/productsImg/soundproof.JPG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 11,
    title: "Scanner",
    des: "Professional Document Scanner.",
    img: "/productsImg/scanner.JPG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
  {
    id: 12,
    title: "PPG Device",
    des: "IOT Based CardioCare System.",
    img: "/productsImg/cardio.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Aeonix has been given responsibility of STEM education in our school St.Stephen's School, Birati and they are doing a very commendable job.",
    name: "Subrata Chatterjee",
    title: "Student",
    profileImg:
      "https://imgs.search.brave.com/jenSbVO_BOFfDWi0RnrTkO6SWSuz2Dsj0mNEPtcdxO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc",
  },
  {
    quote:
      "Amazing work culture and an absolutely devoted higher management that will work right along side of you.",
    name: "Sudipta Bhadra",
    title: "Employee",
    profileImg:
      "https://imgs.search.brave.com/jenSbVO_BOFfDWi0RnrTkO6SWSuz2Dsj0mNEPtcdxO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc",
  },
  {
    quote:
      "Thanks a lot to Aeonix Research and Innovations LLP for giving us a massive opportunity for a new training venture I think if we learn well and train better then we have a bright future ahead of us.",
    name: "Nitai Das",
    title: "Student",
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s",
  },
  {
    quote:
      "The best thing about the Aeonix team is their ability to put imagination into reality. Highly professional team for web designing in Kolkata. Highly recommend",
    name: "Kaushik Sinha Chowdhury",
    title: "Client",
    profileImg:
      "https://imgs.search.brave.com/jenSbVO_BOFfDWi0RnrTkO6SWSuz2Dsj0mNEPtcdxO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc",
  },
  {
    quote:
      "our website was created by aeonix research and they did a commendable job.",
    name: "Star Mark",
    title: "Founder of StarMark",
    profileImg:
      "https://aeonixinnovations.com/wp-content/uploads/2022/04/rambo.png",
  },
  {
    quote:
      "Had the pleasure of working in this excellent company as an intern. Very supportive and very ambitious.",
    name: "Rupam Chakraborty",
    title: "Intern",
    profileImg:
      "https://imgs.search.brave.com/jenSbVO_BOFfDWi0RnrTkO6SWSuz2Dsj0mNEPtcdxO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc",
  },
  {
    quote:
      "Aeonix is the most trusted working place in Kolkata.. Companies seniors also friendly.",
    name: "Reya Saha",
    title: "Intern",
    profileImg:
      "https://imgs.search.brave.com/jenSbVO_BOFfDWi0RnrTkO6SWSuz2Dsj0mNEPtcdxO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM3/LzM2MF9GXzc1MjEz/MzcyOV9kejRHWURr/YUtaNnZSQ05hZFQ1/UHoyRUJlNDNTaFJv/cy5qcGc",
  },
  {
    quote:
      "They have a highly skilled team qualified to find the best fit for each requirement.",
    name: "victor bhattacharya",
    title: "Founder of EBLUESOFT",
    profileImg:
      "https://aeonixinnovations.com/wp-content/uploads/2022/04/victor_bhattacharya.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Tata Motors",
    img: "/clientsLogos/TataMotors.png",
    title: "Tata Motors",
  },
  // {
  //   id: 2,
  //   name: "Curafoot",
  //   img: "/clientsLogos/curafootpng.png",
  //   title: "Curafoot",
  // },
  {
    id: 3,
    name: "ITC",
    img: "/clientsLogos/itcPng.png",
    title: "ITC Limited",
  },
  {
    id: 4,
    name: "Tata Tele",
    img: "/clientsLogos/tataDoBg.png",
    title: "TATA Tele",
  },
  // {
  //   id: 5,
  //   name: "STAR MARK",
  //   img: "/clientsLogos/starmarkpng.png",
  //   title: "STAR MARK",
  // },
  // {
  //   id: 6,
  //   name: "CID",
  //   img: "/clientsLogos/CID_Logo.png",
  //   title: "CID",
  // },
  // {
  //   id: 7,
  //   name: "Dna Network",
  //   img: "/clientsLogos/DNALogoPng.png",
  //   title: "DNA NETWORK",
  // },
  {
    id: 8,
    name: "Gov Of Wb",
    img: "/clientsLogos/GOV_WEST_BENGAL_Logo.png",
    title: "Gov of West Bengal",
  },
  {
    id: 9,
    name: "West_Bengal Police",
    img: "/clientsLogos/WB_POLICE_Logo.png",
    title: "West_Bengal Police",
  },
  // {
  //   id: 10,
  //   name: "GCELT",
  //   img: "/clientsLogos/GUCOLLEGE_Logo.png",
  //   title: "GCELT",
  // },
  {
    id: 11,
    name: "Halida Muncipality",
    img: "/clientsLogos/HALIDA_Logo.png",
    title: "Haldia Muncipality",
  },
  {
    id: 12,
    name: "IIT Hydrebad",
    img: "/clientsLogos/IIT_Hyderabad_Logo.png",
    title: "IIT Hyderabad",
  },
  // {
  //   id: 13,
  //   name: "JIS College",
  //   img: "/clientsLogos/JISCOLLEGE_Logo.png",
  //   title: "JIS College",
  // },
  // {
  //   id: 14,
  //   name: "NCSM",
  //   img: "/clientsLogos/NationalCouncil_Logo.png",
  //   title: "NCSM",
  // },
  // {
  //   id: 15,
  //   name: "NER",
  //   img: "/clientsLogos/NER_Logo.png",
  //   title: "NER",
  // },
  // {
  //   id: 16,
  //   name: "Ramkrishna School",
  //   img: "/clientsLogos/RAMKRISHNA_Logo.png",
  //   title: "Ramakrishna Mission ",
  // },
  // {
  //   id: 18,
  //   name: "St. Stephen's School",
  //   img: "/clientsLogos/SchoolPng.png",
  //   title: "Stephen's School",
  // },
  // {
  //   id: 19,
  //   name: "Tm Automative",
  //   img: "/clientsLogos/TM_Automative_Logo.png",
  //   title: "TM Automative",
  // },
  // {
  //   id: 20,
  //   name: "WEBEL",
  //   img: "/clientsLogos/WEBEL_Logo.png",
  //   title: "WEBEL",
  // },
  {
    id: 21,
    name: "West_Bengal Pollution Board",
    img: "/clientsLogos/WEST_BEGAL_POLLUTION_Logo.png",
    title: "West_Bengal Pollution Board",
  },
  // {
  //   id: 22,
  //   name: "University of West_Bengal",
  //   img: "/clientsLogos/UNIVERSITY_CALCATA_Logo.png",
  //   title: "University of West_Bengal",
  // },
];

export const media = [
  {
    id: 1,
    name: "TOI",
    img: "/media/TOI.png",
    title: "TIMES OF INDIA",
  },
  {
    id: 2,
    name: "anm",
    img: "/media/anm.jpg",
    title: "anm News",
  },
  {
    id: 3,
    name: "Bengali",
    img: "/media/bb.jpg",
    title: "Bengali",
  },
  {
    id: 4,
    name: "HAMARA MEDIA",
    img: "/media/HM.jpg",
    title: "HAMARA MEDIA",
  },

  {
    id: 5,
    name: "IE",
    img: "/media/IE.jpg",
    title: "The Indian Express",
  },
  {
    id: 6,
    name: "Jukin Media",
    img: "/media/jukinMedia.jpg",
    title: "Jukin Media",
  },
  {
    id: 7,
    name: "Paribesh News",
    img: "/media/paribisha.jpg",
    title: "Paribesh News",
  },
  {
    id: 8,
    name: "Patrika",
    img: "/media/pratik.jpg",
    title: "Patrika",
  },
  {
    id: 9,
    name: "The Telegraphy",
    img: "/media/teleGraphy.jpg",
    title: "The Telegraphy",
  },
  {
    id: 10,
    name: "Zee",
    img: "/media/Zee.jpg",
    title: "Zee News",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software, Web Development, Mobile App Dev",
    desc: "we specialize in creating custom websites and applications for individuals, businesses, and more.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev",
  //   desc: "We bring your vision to life with custom app development for businesses, individuals, and more. From idea to launch, we create apps that fit your unique needs.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/ourServices/appDevellop.png",
  // },
  {
    id: 2,
    title: "Data Science As a Service Model",
    desc: "Data Science as a Service (DSaaS) provides cloud-based analytics, extracting insights from data without in-house infrastructure. It enables cost-effective, data-driven decisions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ourServices/DataScienceLogo.png",
  },
  {
    id: 3,
    title: "Industrial Automation & Robotics",
    desc: "We provide end-to-end IoT analytics solution development. We also provide strategic IoT planning, architecture design, tech stack, selection, technical support and troubleshooting.",
    className: "md:col-span-2",
    thumbnail: "/ourServices/IndustryRObotics.png",
  },
  {
    id: 4,
    title: "Computer Vision & Artificial Intelligence (AI)",
    desc: "Computer Vision and AI merge to empower machines with visual interpretation and intelligent decision-making, transforming industries with advancements in facial recognition and object detection.",
    className: "md:col-span-2",
    thumbnail: "/ourServices/AiVisionsComputer.png",
  },
  {
    id: 5,
    title: "STEM & Corporate Training",
    desc: "We offer high-quality training in IT, IoT, and Robotics, featuring practical, real-world content delivered by experienced facilitators.",
    className: "md:col-span-2",
    thumbnail: "/ourServices/sytemandtraining.png",
  },
  {
    id: 6,
    title: "3D Printing",
    desc: "3D printing revolutionizes manufacturing by layering materials from digital models, enabling rapid prototyping and intricate design across industries like healthcare and aerospace.",
    className: "md:col-span-2",
    thumbnail: "/ourServices/3dPrinting.png",
  },
  // {
  //   id: 8,
  //   title: "Digital Marketing",
  //   desc: "Digital marketing uses online channels to promote products/services, engage customers with targeted content, and optimize strategies in real-time for measurable brand growth.",
  //   className: "md:col-span-2",
  //   thumbnail: "/ourServices/DigitalMarketing.png",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const crouselTitle = [
  "1. The Beginning",
  "2. The Struggle",
  "3. The Growth",
  "4. The Achievement",
  "5. The Sucess",
];

export const crouselTexts = [
  "The Beginning :Embarking on a journey often begins with a spark of inspiration or a compelling need for change. The year was 2020, a time of global upheaval and uncertainty, yet it was also a moment ripe with opportunities. For many, it marked the start of a personal odyssey towards self-discovery and achievement. The path ahead was unclear, filled with challenges and unknowns, but the desire to forge ahead was stronger than ever. This was the beginning of a journey from nothing, a quest to build something meaningful from the ground up",
  "The Beginning :Embarking on a journey often begins with a spark of inspiration or a compelling need for change. The year was 2020, a time of global upheaval and uncertainty, yet it was also a moment ripe with opportunities. For many, it marked the start of a personal odyssey towards self-discovery and achievement. The path ahead was unclear, filled with challenges and unknowns, but the desire to forge ahead was stronger than ever. This was the beginning of a journey from nothing, a quest to build something meaningful from the ground up",
  "The Beginning :Embarking on a journey often begins with a spark of inspiration or a compelling need for change. The year was 2020, a time of global upheaval and uncertainty, yet it was also a moment ripe with opportunities. For many, it marked the start of a personal odyssey towards self-discovery and achievement. The path ahead was unclear, filled with challenges and unknowns, but the desire to forge ahead was stronger than ever. This was the beginning of a journey from nothing, a quest to build something meaningful from the ground up",
  "The Beginning :Embarking on a journey often begins with a spark of inspiration or a compelling need for change. The year was 2020, a time of global upheaval and uncertainty, yet it was also a moment ripe with opportunities. For many, it marked the start of a personal odyssey towards self-discovery and achievement. The path ahead was unclear, filled with challenges and unknowns, but the desire to forge ahead was stronger than ever. This was the beginning of a journey from nothing, a quest to build something meaningful from the ground up",
  "The Beginning :Embarking on a journey often begins with a spark of inspiration or a compelling need for change. The year was 2020, a time of global upheaval and uncertainty, yet it was also a moment ripe with opportunities. For many, it marked the start of a personal odyssey towards self-discovery and achievement. The path ahead was unclear, filled with challenges and unknowns, but the desire to forge ahead was stronger than ever. This was the beginning of a journey from nothing, a quest to build something meaningful from the ground up",
];

export const crouselSlides = [
  "https://images.unsplash.com/photo-1612282130247-abb09429ccc1?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1702867544212-c741c857ca7a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1674020360890-c2dc3ae53be1?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612282131240-6e878907d0f6?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
