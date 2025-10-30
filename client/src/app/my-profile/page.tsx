"use client";
import { assets } from "@/assets/assets_frontend/assets";
import Button from "@/components/Button";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2024-07-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSave = () => setIsEdit(false);
  const handleEdit = () => setIsEdit(true);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative">
          <Image
            src={userData.image}
            alt="User"
            width={120}
            height={120}
            className="rounded-full object-cover border border-gray-200"
          />
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        <div>
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="text-2xl font-semibold border-b border-gray-300 focus:outline-none"
            />
          ) : (
            <h2 className="text-2xl font-semibold">{userData.name}</h2>
          )}
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">
          Contact Information
        </h3>

        <div className="flex items-start">
          <p className="w-28 text-gray-600">Email id:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="border-b border-gray-300 focus:outline-none flex-1"
            />
          ) : (
            <p className="text-primary">{userData.email}</p>
          )}
        </div>

        <div className="flex items-start">
          <p className="w-28 text-gray-600">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="border-b border-gray-300 focus:outline-none flex-1"
            />
          ) : (
            <p className="text-primary">{userData.phone}</p>
          )}
        </div>

        <div className="flex items-start">
          <p className="w-28 text-gray-600">Address:</p>
          {isEdit ? (
            <div className="flex flex-col flex-1">
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                className="border-b border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                className="border-b border-gray-300 focus:outline-none mt-1"
              />
            </div>
          ) : (
            <div>
              <p>{userData.address.line1}</p>
              <p>{userData.address.line2}</p>
            </div>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div className="mt-8 space-y-4">
        <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">
          Basic Information
        </h3>

        <div className="flex items-start">
          <p className="w-28 text-gray-600">Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              className="border-b border-gray-300 focus:outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
        </div>

        <div className="flex items-start">
          <p className="w-28 text-gray-600">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              className="border-b border-gray-300 focus:outline-none"
            />
          ) : (
            <p>20 July, 2024</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {isEdit ? (
          <Button
            text="Save information"
            onClick={handleSave}
            classStyle="border border-primary text-primary hover:bg-primary hover:text-white transition px-6 py-2 rounded-full"
          />
        ) : (
          <Button
            text="Edit"
            onClick={handleEdit}
            classStyle="border border-primary text-primary hover:bg-primary hover:text-white transition px-6 py-2 rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
