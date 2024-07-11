"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Companies from "@/components/Companies";
import MediaPartners from "@/components/MediaPartners";
import Journery from "@/components/ui/journey/Journey";
import Testimonial from "@/components/Clients";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-crop mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        {/* <Grid /> */}

        <Companies />
        {/* <Clients /> */}
        <Testimonial />
        <Experience />
        <MediaPartners />
        <Journery />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
