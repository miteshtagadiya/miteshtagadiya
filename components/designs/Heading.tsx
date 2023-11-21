/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Get in Touch - Connect with Me
        <img
          alt="fillStar"
          className="sqD w-12 -top-6 -right-8 absolute"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/skills/fillStar.svg`}
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl">
        Let's collaborate! Reach out to discuss projects, opportunities, or just
        to say hello. I'm excited to connect and explore potential
        collaborations in the world of web development and beyond.
      </p>
    </div>
  );
}

export default Heading;
