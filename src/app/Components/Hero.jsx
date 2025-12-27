"use client";

import { useRef, useState } from "react";
import { FaPauseCircle } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  return (
    <div className="relative w-full h-[87vh]  ">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute  inset-0 flex items-center justify-between lg:px-30 md:px-5 px-4">
        <div className="text-white max-w-xl space-y-3">
          <p className="md:text-xl  text-white/60">Elevate Your Band With</p>
          <h1 className="md:text-6xl text-xl font-bold ">
            High-Quality <br /> Garments. Ethically <br /> Made.
          </h1>
          <p className="md:text-lg text-sm text-white/60">
            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
            partner for apparel production. Our commitment to ethical
            manufacturing ensures that every garment is crafted with care and
            integrity.
          </p>
          <div className="space-x-2">
            <button className=" border border-primary font-medium text-sm md:px-3 md:py-3 px-2 py-2 bg-primary hover:bg-primary/90 cursor-pointer">
              Contact Us
            </button>
            <button className="border font-medium text-sm md:px-3 md:py-3 px-2 py-2 hover:bg-primary cursor-pointer hover:border-primary">
              Learn More
            </button>
          </div>
        </div>

        <div className="border rounded-full md:p-5 p-2 border-white/20 ">
            <button
          onClick={handleToggle}
          className="bg-white text-black md:p-3 p-2  rounded-full font-medium hover:bg-white/80 cursor-pointer"
        >
          {paused ? (
            <span className="text-primary ">
              <VscDebugStart />
            </span>
          ) : (
            <span className="text-primary ">
              <FaPauseCircle />
            </span>
          )}
        </button>
        </div>
      </div>
    </div>
  );
}
