import { assets } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-16 xl:px-28 py-6 text-gray-800">
      {/* About Us Heading */}
      <h1 className="text-xl md:text-3xl text-center mt-2 md:mt-6 tracking-wide">
        ABOUT <span className="font-semibold">US</span>
      </h1>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row gap-8 py-10 items-center justify-center">
        {/* Image */}
        <div className="w-full md:max-w-[400px] flex justify-center">
          <Image
            src={assets.about_image}
            alt="About image"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 leading-relaxed md:text-[15px] lg:text-[16px] text-justify">
          <p>
            Welcome to <span className="font-medium">Appointo</span>, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Appointo, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Appointo is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Appointo is here to support you every step of the
            way.
          </p>
          <div>
            <b className="block mb-2">Our Vision</b>
            <p>
              Our vision at Appointo is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-10">
        <h2 className="text-lg md:text-2xl font-medium mb-6 text-gray-800">
          WHY <span className="font-semibold">CHOOSE US</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
          {/* Card 1 */}
          <div className="p-10 md:py-20 md:px-10 border md:border-y md:border-l border-gray-300 hover:bg-primary group hover:text-white transition-all">
            <h3 className="font-semibold uppercase mb-2">Efficiency:</h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-10 md:py-20 md:px-10 border border-gray-300 group hover:bg-primary hover:text-white transition-all">
            <h3 className="font-semibold uppercase mb-2">Convenience:</h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-10 md:py-20 md:px-10 border md:border-y md:border-r border-gray-300 hover:bg-primary group hover:text-white transition-all">
            <h3 className="font-semibold uppercase mb-2">Personalization:</h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
