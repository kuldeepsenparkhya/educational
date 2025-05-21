import React from "react";
import Image from "next/image";
import ex1 from "@/assests/images/ex1.png";
import ex2 from "@/assests/images/ex2.png";

const Experience = () => {
  return (
    <div className="text-center bg-[#E2D4BE] py-10">
      <h2 className="text-3xl font-bold py-4">Our Experience Specialists</h2>
      <p className="text-xl max-w-1xl mx-auto mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
      </p>
      <div className="flex flex-wrap justify-evenly gap-6">
        
        <div className="relative bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg w-[320px] overflow-hidden">
          <Image
            src={ex1}
            alt="Sauna Massage"
            height={490}
            width={425}
            className="rounded-t-lg object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-white">Sauna Massage</p>
              <p className="text-gray-300">Natural Health</p>
            </div>
          </div>
        </div>

        <div className="relative bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg w-[320px] overflow-hidden">
          <Image
            src={ex2}
            alt="Spa Treatment"
            height={490}
            width={425}
            className="rounded-t-lg object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-white">Spa Treatment</p>
              <p className="text-gray-300">Mind Relaxation</p>
            </div>
          </div>
        </div>

        <div className="relative bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg w-[320px] overflow-hidden">
          <Image
            src={ex1}
            alt="Cosmetology"
            height={490}
            width={425}
            className="rounded-t-lg object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-white">Cosmetology</p>
              <p className="text-gray-300">Essential Balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
