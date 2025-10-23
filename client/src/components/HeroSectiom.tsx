import React from "react";
import { assets } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import Button from "../components/Button";
import { HiArrowRight } from "react-icons/hi";

const HeroSectiom = () => {

const handleClick = () => {
  const section = document.querySelector("#speciality");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 my-6 md:my-10">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment With Trusted Doctors</p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <Image
            src={assets.group_profiles}
            alt="Logo"
            className="w-28 object-contain"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <Button text='Create Account' icon={HiArrowRight}  classStyle='text-black px-10 bg-white hover:bg-[#EAEFFF] py-4  mt-6' onClick={handleClick} />
      </div>
      <div className="md:w-1/2 relative">
        <Image src={assets.header_img} alt="header image" className="w-full md:absolute bottom-0 h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default HeroSectiom;
