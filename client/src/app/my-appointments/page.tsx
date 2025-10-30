import React from "react";
import { doctors } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className="px-2 lg:px-16 xl:px-28 py-4 md:py-10">
      <h1 className="text-2xl font-bold text-gray-900 text-center md:text-left">
        My Appointments
      </h1>

      <div className="py-6 space-y-6">
        {doctors.slice(0, 3).map((doc, index) => (
          <div
            key={index}
            className="border-2 md:border-0 px-4 md:px-0  rounded-lg md:rounded-0 md:border-y-2 border-gray-300 flex flex-col md:flex-row gap-5 justify-between mt-4 py-4"
          >
            {/* Doctor Info Section */}
            <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
              <div className="bg-[#EAEFFF] rounded-sm flex justify-center sm:block">
                <Image
                  src={doc.image}
                  alt="Doctor Image"
                  className="w-lg sm:w-40 object-cover rounded-sm"
                />
              </div>

              <div className="flex flex-col text-center sm:text-left">
                <p className="font-semibold text-lg sm:text-xl">{doc.name}</p>
                <p className="text-[#4B5563] text-sm sm:text-base">
                  {doc.speciality}
                </p>

                <p className="font-semibold pt-2 text-sm sm:text-base">
                  Address:
                </p>
                <p className="text-[#4B5563] text-sm sm:text-base">
                  {doc.address.line1}
                </p>
                <p className="text-[#4B5563] text-sm sm:text-base">
                  {doc.address.line2}
                </p>

                <p className="text-[#4B5563] pt-2 text-sm sm:text-base">
                  <span className="text-black font-semibold">
                    Date & Time:
                  </span>{" "}
                  5, July, 2024 | 8:30 PM
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row md:flex-col justify-end items-center md:items-end gap-3 w-full md:w-auto mt-4 md:mt-0">
              <Button
                text="Pay Now"
                classStyle=""
                className="w-full py-3.5 rounded-md bg-primary hover:bg-primary-600 text-white transition-all duration-300"
              />
              <Button
                text="Cancel Appointment"
                classStyle=""
                className="w-full  rounded-md sm:w-auto px-6  md:px-10  py-3.5 border border-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
