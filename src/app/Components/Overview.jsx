import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Overview() {
  return (
    <div className="sm:flex md:justify-end lg:px-30 md:px-5 px-4 lg:absolute lg:-bottom-25 lg:right-1">
      <div className="bg-primary py-16 px-9 sm:w-67.5 sm:h-67.25 text-white space-y-3">
        <h1 className="text-2xl font-semibold">Quality Product</h1>
        <p>
          Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed.
        </p>
        <button className="flex items-center gap-3">
          Read More <FaArrowRight />
        </button>
      </div>
      <div className="bg-secondary py-16 px-9 sm:w-67.5 sm:h-67.25 text-white space-y-6">
        <h1 className="text-2xl font-semibold">Project Overview</h1>
        <h2 className="text-4xl font-bold">35 Millions</h2>
        <button className="flex items-center gap-3">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
