import Image from "next/image";
import React from "react";
import bannerImg from "../../../assests/images/Group 1.png";

const Banner = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex justify-center items-center">
        <Image
          src={bannerImg}
          alt="salon-banner"
          className="object-cover w-full sm:w-[100vw] h-auto cursor-pointer"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;

