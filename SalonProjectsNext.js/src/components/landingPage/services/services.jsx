import Image from "next/image";
import React from "react";
import servicesImg from "@/assests/images/s1.png";
import servicesImg2 from "@/assests/images/s2.png";
import servicesImg3 from "@/assests/images/s3.png";
import servicesImg4 from "@/assests/images/s4.png";
import servicesImg5 from "@/assests/images/s5.png";
import servicesGirls from "@/assests/images/massage 1.png";
import "./services.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-12 bg-[#C4C4C4]">
      <div className="container mx-auto text-center">
        <h4 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h4>
        <p className="text-gray-600 mb-2">
          Spread over two floors, our beautiful spa offers a soothing environment in which you can rest, relax, and feel
          completely rejuvenated.
        </p>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text since the 1500s.
        </p>

        <div className="flex justify-between items-center gap-8 mt-8">
          <div className="service-item">
            <div className="rounded-full p-2 bg-[#A2886A] service-circle">
              <Image
                src={servicesImg}
                alt="service-img"
                className="object-cover w-12 h-12 rounded-full cursor-pointer"
                priority
              />
            </div>
            <h6>Spa</h6>
          </div>

          <div className="service-item">
            <div className="rounded-full p-2 bg-[#A2886A] service-circle">
              <Image
                src={servicesImg2}
                alt="service-img"
                className="object-cover w-12 h-12 rounded-full cursor-pointer"
                priority
              />
            </div>
            <h6>Hair Makeup</h6>
          </div>

          <div className="service-item">
            <div className="rounded-full p-2 bg-[#A2886A] service-circle">
              <Image
                src={servicesImg3}
                alt="service-img"
                className="object-cover w-12 h-12 rounded-full cursor-pointer"
                priority
              />
            </div>
            <h6>Waxing</h6>
          </div>

          <div className="service-item">
            <div className="rounded-full p-2 bg-[#A2886A] service-circle ">
              <Image
                src={servicesImg4}
                alt="service-img"
                className="object-cover w-12 h-12 rounded-full cursor-pointer"
                priority
              />
            </div>
            <h6>Facial</h6>
          </div>

          <div className="service-item">
            <div className="rounded-full p-2 bg-[#A2886A] ">
              <Image
                src={servicesImg5}
                alt="service-img"
                className="object-cover w-12 h-12 rounded-full cursor-pointer"
                priority
              />
            </div>
            <h6>Massage</h6>
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div>
              <ul className="space-y-3 text-gray-700 text-lg font-medium">
                <li className="flex items-center gap-2 bg-[#9E8A68] text-white rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12  rounded-r-full">
                    <FaLongArrowAltRight className="text-white text-2xl" />
                  </div>
                  <span>Massage Therapy</span>
                </li>
                <li className="flex items-center gap-2 bg-[#70634E] text-white rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#9E8A68] rounded-r-full">
                    <FaLongArrowAltRight className="text-white text-2xl" />
                  </div>
                  <span>Facials</span>
                </li>
                <li className="flex items-center gap-2 bg-[#70634E] text-white rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#9E8A68] rounded-r-full">
                    <FaLongArrowAltRight className="text-white text-2xl" />
                  </div>
                  <span>Pedicures</span>
                </li>
                <li className="flex items-center gap-2 bg-[#70634E] text-white rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#9E8A68] rounded-r-full">
                    <FaLongArrowAltRight className="text-white text-2xl" />
                  </div>
                  <span>Manicures</span>
                </li>
                <li className="flex items-center gap-2 bg-[#70634E] text-white rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#9E8A68] rounded-r-full">
                    <FaLongArrowAltRight className="text-white text-2xl" />
                  </div>
                  <span>Body Wraps</span>
                </li>
                <li className="flex items-center gap-2 bg-[#70634E] text-white rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#9E8A68] rounded-r-full">
                    <FaLongArrowAltRight className="text-white text-2xl" />
                  </div>
                  <span>Waxing & Cosmetics</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center mt-10">
              <div className="rounded-full overflow-hidden shadow-2xl hover:shadow-md transition-shadow duration-300">
                <Image
                  src={servicesGirls}
                  alt="Massage Therapy"
                  className="object-cover w-[250px] h-[250px] rounded-full cursor-pointer"
                  priority
                />
              </div>
            </div>

            <div className="text-left space-y-3 mt-3">
              <h4 className="font-semibold text-gray-600">Massage Therapy</h4>
              <h6 className="text-xl text-gray-700 mb-2">$40 - $80</h6>
              <p className="text-gray-600 leading-relaxed mb-8 mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It remained essentially unchanged.
              </p>
              <span className="text-white-500 underline cursor-pointer">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
