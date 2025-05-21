import React from "react";
import welcomeImg from "../../../assests/images/welcome.png";
import Image from "next/image";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="container mx-auto py-16 px-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="image-wrapper relative p-8 rounded-lg overflow-hidden">
          <Image
            src={welcomeImg}
            alt="salon-banner"
            className="object-cover w-[515px] h-[310px] rounded-lg cursor-pointer welcome-img"
            priority
          />
        </div>

        <div className="space-y-4 text-gray-800 p-6 rounded-lg bg-white">
          <h6 className="text-lg font-semibold text-amber-600">We Provide:</h6>
          <h4 className="text-3xl font-bold text-gray-700">Welcome to Spa Center:</h4>
          <p className="text-base text-gray-800">
            Spread over two floors, our beautiful spa offers a soothing environment in which you can rest, relax, and feel
            completely rejuvenated.
          </p>
          <p className="text-base text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It remained essentially unchanged and was popularized with the advent of Lorem Ipsum in printing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
