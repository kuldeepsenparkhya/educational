import Image from "next/image";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import products1 from "@/assests/images/p1.webp";
import products2 from "@/assests/images/p2.webp";
import products3 from "@/assests/images/p3.webp";
import products4 from "@/assests/images/p4.webp";

const productData = [
  { id: 1, name: "Face Cleaner", image: products1, rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Skin Toner", image: products2, rating: "⭐⭐⭐⭐" },
  { id: 3, name: "Moisturizer", image: products3, rating: "⭐⭐⭐⭐⭐" },
  { id: 4, name: "Sunscreen", image: products4, rating: "⭐⭐⭐⭐" },
];

const Products = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div className="text-left">
          <h4 className="text-3xl font-bold mb-2">Our Exclusive Products</h4>
          <p className="text-gray-800 text-1xl break-all ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
        </div>
        <div>
          <button className="mt-4 px-6 py-2 bg-[#ED806B] text-white rounded-full hover:bg-blue-700 transition">
            All Products
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-12">
        {productData.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105 p-12"
            />
            <div className="p-4">
              <h6 className="text-lg font-semibold">{product.name}</h6>
              <p className="text-yellow-500">{product.rating}</p>
            </div>
            <div className="absolute inset-0 bg-blur bg-opacity-0 backdrop-blur-sm group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
              <button className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FaHeart size={20} />
              </button>
              <button className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <FaShoppingCart size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
