"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../assets/assets_frontend/assets";

const Navbar = () => {
  const router = useRouter();
  const [token, setToken] = useState(false);

  const handleLogin = () => {
    router.push("/login");
    setToken(true);
  };

  const handleLogout = () => {
    router.push("/");
    setToken(false);
  };

  const handleMyProfile = () => {
    router.push("/my-profile");
    setToken(true);
  };

  const handleMyAppointment = () => {
    router.push("/my-appointment");
    setToken(true);
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-400 py-4 mb-5">
      <div
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src={assets.logo} alt="Logo" className="w-14" />
        <p className="text-blue-900 text-3xl font-extrabold">Appointo</p>
      </div>

      <ul className="flex justify-center items-center gap-10">
        <Link href="/"><li className="py-1 cursor-pointer">HOME</li></Link>
        <Link href="/doctors"><li className="py-1 cursor-pointer">ALL DOCTORS</li></Link>
        <Link href="/about"><li className="py-1 cursor-pointer">ABOUT</li></Link>
        <Link href="/contact"><li className="py-1 cursor-pointer">CONTACT</li></Link>
      </ul>

      <div className="flex justify-center items-center">
        {token ? (
          <div className="flex items-center gap-4 cursor-pointer group relative">
            <Image src={assets.profile_pic} alt="Profile" className="w-12 rounded-full" />
            <Image src={assets.dropdown_icon} alt="Dropdown" className="w-3" />
            <div className="absolute top-0 right-0 pt-[4.8rem] text-base font-medium text-gray-600 z-0 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={handleMyProfile} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={handleMyAppointment} className="hover:text-black cursor-pointer">My Appointment</p>
                <p onClick={handleLogout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-primary text-white px-8 py-3 font-light hidden md:block rounded-full"
          >
            CREATE ACCOUNT
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
