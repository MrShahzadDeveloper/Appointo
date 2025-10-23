"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../assets/assets_frontend/assets";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../components/Button";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [token, setToken] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menu = [
    { href: "/", label: "HOME" },
    { href: "/doctors", label: "ALL DOCTORS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  const handleLogin = (): void => {
    router.push("/login");
    setToken(true);
  };

  const handleLogout = (): void => {
    router.push("/");
    setToken(false);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const handleMyProfile = (): void => {
    router.push("/my-profile");
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const handleMyAppointment = (): void => {
    router.push("/my-appointment");
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const openDropdown = (): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = (): void => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <nav className="flex justify-between items-center border-b border-gray-300 py-3 px-2 lg:px-16 xl:px-28 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <p className="text-gray-900 text-2xl md:text-3xl font-extrabold tracking-tight">
          Appointo
        </p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-center items-center gap-8 text-gray-700 font-medium">
        {menu.map((link) => (
          <Link key={link.href} href={link.href}>
            <li
              className="relative cursor-pointer transition-all duration-200 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
              after:h-0.5 after:bg-primary after:transition-all after:duration-300
              hover:text-primary hover:after:w-full"
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>

      {/* Desktop Profile / Login */}
      <div className="hidden lg:flex items-center relative">
        {token ? (
          <div
            className="relative flex items-center gap-3 cursor-pointer"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Image
              src={assets.profile_pic}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
            />
            <Image
              src={assets.dropdown_icon}
              alt="Dropdown"
              className="w-3 h-3 mt-1"
            />

            {isDropdownOpen && (
              <div
                className="absolute right-0 top-12 bg-white shadow-lg border border-gray-200 rounded-lg p-4 w-48 transition-all duration-200 z-50"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <p
                  onClick={handleMyProfile}
                  className="hover:text-blue-800 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={handleMyAppointment}
                  className="hover:text-blue-800 cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={handleLogout}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-primary hover:bg-blue-900 text-white px-6 py-2 rounded-full text-sm md:text-base transition-all duration-200"
          >
            CREATE ACCOUNT
          </button>
        )}
      </div>

      {/* Hamburger Menu (for small & medium screens) */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {isMenuOpen ? (
            <HiX className="text-3xl text-gray-700" />
          ) : (
            <HiMenu className="text-3xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown (sm + md) */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white border-t border-gray-200 shadow-md lg:hidden animate-slideDown">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            {menu.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <li className="hover:text-primary transition-colors duration-200">
                  {link.label}
                </li>
              </Link>
            ))}

            {token ? (
              <>
                <p
                  onClick={handleMyProfile}
                  className="hover:text-blue-800 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={handleMyAppointment}
                  className="hover:text-blue-800 cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={handleLogout}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Logout
                </p>
              </>
            ) : (
              <>
                <Button
                  text="CREATE ACCOUNT"
                  onClick={handleLogin}
                  classStyle="px-6 bg-[#5F71FF] hover:bg-blue-900"
                />
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
