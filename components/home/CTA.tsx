/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <Image
        alt="lineBreak"
        className="w-30 m-auto mb-2"
        src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/lineBreak.svg`}
        height={10}
        width={238}
      />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:miteshtagadiya@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <img
        alt="fancyLines"
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/fancyLines.svg`}
      />
    </div>
  );
}

export default CTA;
