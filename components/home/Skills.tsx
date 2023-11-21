/* eslint-disable @next/next/no-img-element */
import React from "react";
import { skills } from "@/data/content/home";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        I got the experience.
        <br />
        Here is my toolbelt for success.
        <img
          alt="laptop"
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/skills/laptop.svg`}
        />
        <img
          alt="coding"
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/skills/coding.svg`}
        />
        <img
          alt="youtube"
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/skills/youtube.svg`}
        />
        <img
          alt="fillStar"
          className="sqD top-[-15px] right-[-15px]"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/skills/fillStar.svg`}
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <Image
                width={50}
                height={50}
                alt={item.title}
                src={item.icon}
                style={item.style}
              />
              <p className="text-xs text-fun-gray font-bold mt-3">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
