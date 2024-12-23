"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || !mainRef.current) return;

      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    };

    if (window.location.hash) {
      requestAnimationFrame(handleHashChange);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div ref={mainRef} className="relative bg-black-100">
      <FloatingNav navItems={navItems} />
      <div className="flex flex-col">
        <Hero />
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-10">
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
