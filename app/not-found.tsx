"use client";

import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black-100">
      {/* Background with grid and spotlights */}
      <div className="absolute inset-0">
        {/* Spotlights */}
        <div className="absolute inset-0 overflow-hidden">
          <Spotlight
            className="absolute -top-40 -left-10 md:-left-32 md:-top-20"
            fill="white"
          />
          <Spotlight
            className="absolute top-10 left-[80%] h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="absolute left-80 top-28 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>

        {/* Grid */}
        <div className="absolute inset-0">
          <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]" />
          <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4 max-w-2xl">
          <TextGenerateEffect
            words="404 - Page Not Found"
            className="text-4xl md:text-6xl font-bold text-primary"
          />

          <div className="space-y-4">
            <p className="text-muted-foreground text-lg md:text-xl">
              Oops! This page seems to have vanished into cyberspace.
            </p>
            <p className="text-muted-foreground/80 text-sm md:text-base">
              Don&apos;t worry, even the best developers get lost sometimes.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors group"
          >
            Back to Home
            <FaLocationArrow className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
