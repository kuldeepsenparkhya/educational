import React from "react";
import Image from "next/image";
import center1 from "@/assests/images/c1.png";
import center2 from "@/assests/images/c2.png";
import center3 from "@/assests/images/c3.png";

const Center = () => {
  return (
    <div className="py-10 bg-[#F9F3F1]">
      <div className="ms-5 mb-8">
        <h1 className="text-[#B58152] text-5xl font-bold mb-4">BEAUTY AND SPA CENTER</h1>
        <p className="text-gray-800 text-xl  mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It remained essentially unchanged. It was popularised in the with the Lorem Ipsum is simply dummy text of the
          printing and essentially unchanged.
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 w-[320px]">
          <Image src={center1} alt="Sauna Massage" height={490} width={425} className="rounded-t-lg object-cover" priority />
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-[#B58152]">Sauna Massage</p>
            <p className="text-gray-600">Natural Health</p>
          </div>
        </div>

        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 w-[320px]">
          <Image src={center2} alt="Spa Treatment" height={490} width={425} className="rounded-t-lg object-cover" priority />
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-[#B58152]">Spa Treatment</p>
            <p className="text-gray-600">Mind Relaxation</p>
          </div>
        </div>

        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 w-[320px]">
          <Image src={center3} alt="Cosmetology" height={490} width={425} className="rounded-t-lg object-cover" priority />
          <div className="text-center mt-4">
            <p className="text-xl font-semibold text-[#B58152]">Cosmetology</p>
            <p className="text-gray-600">Essential Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
