"use client"
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import HeroSectiom from "@/components/HeroSectiom";
import SpecialityMenu from "@/components/SpecialityMenu";
import TopDoctors from "@/components/TopDoctors";
import React from "react";

const page = () => {
  return (
    <div className="px-2 lg:px-16 xl:px-28">
      <HeroSectiom />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default page;
