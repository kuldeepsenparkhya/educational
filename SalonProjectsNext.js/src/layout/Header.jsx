"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../assests/images/13.png";
import Image from "next/image";
import { FiArrowUp, FiMenu, FiX } from "react-icons/fi";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Shop", id: "shop" },
    { name: "Products", id: "products" },
    { name: "Offers", id: "offers" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white relative">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src={logo} alt="salon-logo" width={70} height={117} className="object-contain cursor-pointer" />
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <FiX size={28} className="text-gray-600" /> : <FiMenu size={28} className="text-gray-600" />}
        </button>
      </div>

      <nav className="hidden md:flex flex-1 justify-evenly gap-6 text-gray-600 text-base font-semibold">
        {links.map((link) => (
          <button key={link.name} onClick={() => scrollToSection(link.id)} className="hover:text-blue-600">
            {link.name}
          </button>
        ))}
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col items-center gap-4 p-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  toggleMenu();
                }}
                className="hover:text-blue-600"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-blue-700"
          aria-label="Back to Top"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </header>
  );
};

export default Header;
