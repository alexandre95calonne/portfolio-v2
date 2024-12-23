import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Background avec grid et spotlights */}
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

      {/* Contenu */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-4"
          />

          <p className="text-center md:tracking-wider my-6 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Alexandre, a Next.js Developer based in France.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
