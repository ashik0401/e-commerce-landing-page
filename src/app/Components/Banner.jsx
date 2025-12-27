import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full  bg-[#CDF0EF] py-16 md:px-5 px-4 lg:px-30">
      <div className=" md:flex items-center justify-between space-y-10">
        <div className="relative md:w-[70%] w-full  rounded-xl overflow-hidden ">
          <Image
            src="/bg (2).png"
            alt="Banner Left"
            width={1080}
            height={850}
            className=""
          />
          <div className="absolute inset-0 flex flex-col justify-center md:p-25 px-10 space-y-3">
            <h1 className="border border-secondary text-center py-1 w-15 text-secondary font-semibold text-xs rounded-full">
              Process
            </h1>
            <h2 className="md:text-3xl text-sm md:font-medium  font-extrabold">
              Do You Want Custom Project With <br /> Textilery? Contact Us Now
            </h2>
            <p className="text-xs md:text-md">
              At  Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production. <br /> Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.
            </p>
            <button className="  font-medium text-xs text-secondary border border-secondary w-20 md:py-2 p-1">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end  md:w-[30%] rounded-xl overflow-hidden">
          <Image
            src="/cloths.png"
            alt="Banner Right"
            width={450}
            height={320}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
