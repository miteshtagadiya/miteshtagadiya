"use client";
import React from "react";
import ScrollTo from "react-scroll-into-view";
import Confetti from "react-confetti";

function HeroLink() {
  const [isExploding, setIsExploding] = React.useState(false);

  return (
    <>
      {isExploding && (
        <Confetti
          width={1200}
          numberOfPieces={400}
          recycle={false}
          gravity={0.3}
          height={window.innerHeight}
        />
      )}
      <ScrollTo selector={`#main-section`}>
        <div
          onClick={e => {
            e.preventDefault();
            setIsExploding(true);
          }}
          className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors"
        >
          Tell me more
        </div>
      </ScrollTo>
    </>
  );
}

export default HeroLink;
