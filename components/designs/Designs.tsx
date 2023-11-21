/* eslint-disable @next/next/no-img-element */
import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {designs.map((item, index) => {
        return (
          <div className="w-full" key={index}>
            <a href={item.link} target="_blank" className="w-full">
              <img
                alt={item.link}
                className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                src={item.img}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Designs;
