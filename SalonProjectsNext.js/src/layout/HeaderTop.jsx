import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import './HeaderTop.css';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="message-icons">
        <MdOutlineMailOutline size={20} />
        <a href="mailto:info@louisvillebeautysalon.com" className="contact-link">
          info@louisvillebeautysalon.com
        </a>
        <span className="vertical-line"></span>
        <IoCallOutline size={20} />
        <a href="tel:+654555555" className="contact-link">
          +654 555555
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;

