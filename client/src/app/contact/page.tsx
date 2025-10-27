import { assets } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="px-4 lg:px-16 xl:px-28 py-10 text-gray-800">
      {/* Heading */}
      <h1 className="text-xl md:text-3xl text-center mt-2 md:mt-10 tracking-wide">
        CONTACT <span className="font-semibold">US</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-6 md:py-18">
        {/* Left Image */}
        <div className="w-full md:max-w-[450px] flex justify-center">
          <Image
            src={assets.contact_image}
            alt="Contact Image"
            className="w-full h-auto rounded-sm object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-10 w-full max-w-md">
          {/* Our Office Section */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              OUR OFFICE
            </h2>
            <div className="">
              <p className="text-gray-600 leading-relaxed">
                54709 Willms Station, <br />
                Suite 350, Washington, USA
              </p>
            </div>
            <p className="mt-3 text-gray-700">
              <span className="font-medium">Tel:</span> (415) 555-0132
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              appointo@gmail.com
            </p>
          </div>

          {/* Careers Section */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              CAREERS AT APPOINTO
            </h2>
            <p className="text-gray-600 text-[15px] mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="px-6 py-2 border border-gray-800 text-gray-800 rounded-sm cursor-pointer hover:bg-primary hover:text-white transition-all">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
