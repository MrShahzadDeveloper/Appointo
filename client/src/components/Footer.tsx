"use client";
import { assets } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200 px-6 lg:px-16 xl:px-28">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        
        {/* Left Side - Logo & Description */}
        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <Image src={assets.logo} alt="logo" width={40} height={40} />
            <h2 className="text-2xl font-semibold text-gray-900">Appointo</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Appointo is your smart medical appointment booking app that connects 
            patients with trusted doctors and healthcare professionals in just a few clicks. 
            Whether it’s a routine check-up or a specialist consultation, Appointo helps you 
            manage your health with ease and convenience — anytime, anywhere.
          </p>
        </div>

        {/* Middle - Company Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">COMPANY</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Contact Us", "Privacy Policy"].map((item, i) => (
              <li
                key={i}
                className="relative group cursor-pointer w-fit"
              >
                <span className="text-gray-600 text-sm hover:text-primary transition-colors duration-200">
                  {item}
                </span>
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Get in Touch */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>+1-212-456-7890</li>
            <li>support@appointoapp.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 pt-6 border-t border-gray-200">
        © {new Date().getFullYear()} Appointo — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
