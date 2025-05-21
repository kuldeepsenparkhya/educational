// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MdFacebook } from "react-icons/md";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { IoLogoInstagram } from "react-icons/io5";
// import { TiSocialYoutubeCircular } from "react-icons/ti";
// import logo from "../assests/images/13.png"; 
// import "./Footer.css"; 

// const Footer = () => {
//   return (
//     <footer className="footer bg-dark-gray text-white pt-11">
//       <div className="ms-12 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30">
          
//           <div className="space-y-4">
//             <Link href="/" passHref>
//               <Image 
//                 src={logo} 
//                 alt="salon-logo" 
//                 width={60} 
//                 height={110} 
//                 className="object-contain cursor-pointer" 
//               />
//             </Link>
//             <p className="text-base text-white-800 pt-4 ">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
//               standard dummy text ever industry. Lorem Ipsum has been the lorem.
//             </p>
//             <div className="flex space-x-3 mt-4">
//               <Link href="https://facebook.com" passHref>
//                 <div className="social-icon">
//                   <MdFacebook size={24} />
//                 </div>
//               </Link>
//               <Link href="https://twitter.com" passHref>
//                 <div className="social-icon">
//                   <AiFillTwitterCircle size={24} />
//                 </div>
//               </Link>
//               <Link href="https://instagram.com" passHref>
//                 <div className="social-icon">
//                   <IoLogoInstagram size={24} />
//                 </div>
//               </Link>
//               <Link href="https://youtube.com" passHref>
//                 <div className="social-icon">
//                   <TiSocialYoutubeCircular size={24} />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
//             <ul className="space-y-1 text-bash text-white-800 pt-2">
//               <li><Link href="/about">About</Link></li>
//               <li><Link href="/faq">FAQ</Link></li>
//               <li><Link href="/career">Career</Link></li>
//               <li><Link href="/team">Our Team</Link></li>
//               <li><Link href="/services">Services</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
//             <ul className="space-y-1 text-bash text-white-800 pt-2">
//               <li>Monday – Friday: 8am – 6pm EST</li>
//               <li>Saturday: 9am – 5pm EST</li>
//               <li>Sunday: 9am – 4pm EST</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
//             <ul className="space-y-1 text-bash text-white-800 pt-2">
//               <li>90 St Johns Brooklyn, NY, United States</li>
//               <li>Email: contact.louisvillebeautysalon@gmail.com</li>
//               <li>Phone: (+01) 888.999.77</li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       <div className="flex flex-row justify-between bg-darker-gray py-4 mt-10 ps-12 pe-8">
//         <p className="text-bash text-white-800">© Copyright Louisville Beauty Salon All rights reserved.</p>
//         <p className="text-bash text-white-800">Privacy Policy | Terms of Use</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import logo from "../assests/images/13.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark-gray text-white pt-11">
      <div className="px-4 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4 ">
            <div className="salon-logo">
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="salon-logo"
                width={60}
                height={110}
                className="object-contain cursor-pointer "
              />
            </Link>
            </div>
            <p className="text-sm md:text-base text-gray-300 pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever industry. Lorem Ipsum has been the lorem.
            </p>
            <div className="flex space-x-3 mt-4">
              <Link href="https://facebook.com" passHref>
                <div className="social-icon">
                  <MdFacebook size={24} />
                </div>
              </Link>
              <Link href="https://twitter.com" passHref>
                <div className="social-icon">
                  <AiFillTwitterCircle size={24} />
                </div>
              </Link>
              <Link href="https://instagram.com" passHref>
                <div className="social-icon">
                  <IoLogoInstagram size={24} />
                </div>
              </Link>
              <Link href="https://youtube.com" passHref>
                <div className="social-icon">
                  <TiSocialYoutubeCircular size={24} />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
            <ul className="space-y-1 text-gray-300 pt-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <ul className="space-y-1 text-gray-300 pt-2">
              <li>Monday – Friday: 8am – 6pm EST</li>
              <li>Saturday: 9am – 5pm EST</li>
              <li>Sunday: 9am – 4pm EST</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-gray-300 pt-2">
              <li>90 St Johns Brooklyn, NY, United States</li>
              <li>Email: contact.louisvillebeautysalon@gmail.com</li>
              <li>Phone: (+01) 888.999.77</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-darker-gray py-4 mt-10 px-4 md:px-12">
        <p className="text-sm text-gray-400 text-center md:text-left">© Copyright Louisville Beauty Salon. All rights reserved.</p>
        <p className="text-sm text-gray-400 text-center md:text-right mt-2 md:mt-0">
          Privacy Policy | Terms of Use
        </p>
      </div>
    </footer>
  );
};

export default Footer;
