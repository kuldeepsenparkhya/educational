import Image from "next/image";
import React from "react";
import { GoTrophy } from "react-icons/go";
import { IoMdHappy } from "react-icons/io";
import { SiTrainerroad } from "react-icons/si";
import offers from "../../../assests/images/offers.png";
import "./offers.css";

const Offers = () => {
  return (
    <div className="bg-[#F8F2E9] p-8 rounded-xl shadow-lg flex flex-wrap justify-between items-center">
      <div className="text-left w-full md:w-1/2 mb-8 md:mb-0 ps-12">
        <h2 className="text-3xl font-bold text-white bg-[#B58152] p-4 rounded-lg inline-block">Our Special Offers</h2>
        <p className="text-gray-700 mt-4 max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </p>

        <div className="flex gap-8 mt-6">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <IoMdHappy size={40} className="text-yellow-500 mb-2" />
            <span className="text-2xl font-semibold">283+</span>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <GoTrophy size={40} className="text-yellow-500 mb-2" />
            <span className="text-2xl font-semibold">432+</span>
            <p className="text-gray-600">Win Awards</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <SiTrainerroad size={40} className="text-yellow-500 mb-2" />
            <span className="text-2xl font-semibold">545+</span>
            <p className="text-gray-600">Our Trainers</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full md:w-1/2">
        <div className="relative rounded-xl overflow-hidden clipPathCustom">
          <Image src={offers} alt="Special Offers" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
