/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";
import Image from "next/image";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <div className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <Image
              alt="Mitesh Tagadiya"
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}static/logos/logo_no_text.png`}
              width="60"
              height={60}
            />
            {"Mitesh Tagadiya".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </div>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100 font-bold"
                  : "opacity-80 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
