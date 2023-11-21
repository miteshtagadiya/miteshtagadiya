"use client"
import React from "react";
import ScrollTo from "react-scroll-into-view";

function HeroLink() {
  return (
    <ScrollTo selector={`#main-section`}>
      <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
        Tell me more
      </div>
    </ScrollTo>
  );
}

export default HeroLink;
