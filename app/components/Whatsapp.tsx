"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export const WhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open("https://wa.me/33767284862", "_blank");
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex items-end gap-4">
      {isHovered && (
        <div className="animate-fade-in absolute right-[100px] top-[50%] min-w-fit -translate-y-1/2 rounded-lg bg-white/10 p-4 shadow-lg backdrop-blur-sm">
          <p className="whitespace-nowrap text-sm font-medium text-white">
            Contact me on WhatsApp
          </p>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#01E676] md:h-20 md:w-20"
          aria-label="Contact us on WhatsApp"
        >
          <span className="absolute left-[-3px] top-[2px] z-50 h-4 w-4 md:h-4 md:w-4">
            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-green-500 drop-shadow" />
          </span>
          <Icon
            icon="mdi:whatsapp"
            className="h-9 w-9 text-secondary md:h-11 md:w-11"
          />
        </button>
      </div>
    </div>
  );
};
