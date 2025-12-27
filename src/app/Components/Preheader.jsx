import React from "react";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });

export default function Preheader() {
  return (
    <div className={`${lato.className} fixed top-0 left-0 w-full z-50 flex justify-between lg:px-30  md:px-5 items-center bg-secondary text-white overflow-hidden`}>

      <div className="w-full md:hidden  flex items-center justify-between">
        <Marquee gradient={false} speed={50}>
          <div className="flex gap-7 text-sm font-medium py-4 whitespace-nowrap">
            <p className="flex items-center gap-1">
              <CiLocationOn size={16}  />
              <span>Kashimpur, Gazipur Sadar / Gazipur</span>
            </p>
            <p className="flex items-center gap-1">
              <CiMobile4 size={16}  />
              <span>+880 01713-027875</span>
            </p>
          </div>
        </Marquee>
        <div className="pr-2">
          <div className="flex bg-white gap-2 h-13 items-center px-4">
            <FaFacebookF size={16} className="text-primary" />
            <FaTwitter size={16} className="text-primary" />
            <FaInstagram size={16} className="text-primary" />
            <FaYoutube size={16} className="text-primary" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-7 text-sm font-medium py-4">
        <p className="flex items-center gap-1">
          <CiLocationOn size={16}  />
          <span>Kashimpur, Gazipur Sadar / Gazipur</span>
        </p>
        <p className="flex items-center gap-1">
          <CiMobile4 size={16}  />
          <span>+880 01713-027875</span>
        </p>
      </div>

      <div className="flex bg-white gap-3 h-13 items-center px-4">
        <FaFacebookF size={16} className="text-primary" />
        <FaTwitter size={16} className="text-primary" />
        <FaInstagram size={16} className="text-primary" />
        <FaYoutube size={16} className="text-primary" />
      </div>
    </div>
  );
}
