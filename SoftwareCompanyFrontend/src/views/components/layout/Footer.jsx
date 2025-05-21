import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

import logo from "../../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(6, 18, 20, 1) 7%, rgba(137, 163, 163, 1)",
        }}
      >
        <div className="container">
          <footer className="text-center text-lg-start text-white">
            <div className="container p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-md-3  mx-auto mt-3">
                    {/* <h6 className="text-uppercase mb-4 font-weight-bold">
                      Company name
                    </h6>
                     */}
                    <img src={logo} alt="" />
                    <p>
                      Explore cutting-edge design concepts that create a
                      seamless and immersive user experience
                    </p>
                  </div>

                  <hr className="w-100 clearfix d-md-none" />

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Services
                    </h6>
                    <p>
                      <a className="text-white text-decoration-none">AI Developments</a>
                    </p>
                    <p>
                      <a className="text-white text-decoration-none">Machine Learnings</a>
                    </p>
                    <p>
                      <a className="text-white text-decoration-none">Crypto Currencey</a>
                    </p>
                    <p>
                      <a className="text-white text-decoration-none">Android Developments</a>
                    </p>
                  </div>

                  <hr className="w-100 clearfix d-md-none" />

                  <div className="col-md-3 col-lg-3  mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Contact
                    </h6>
                    <p>
                      <i className="fas fa-home mr-3"></i> New York, NY 10012,
                      US
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> unada@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 01 234 567 89
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Follow us
                    </h6>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <FaFacebook />
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#dd4b39" }}
                      href="#!"
                      role="button"
                    >
                      <FaGoogle />
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#ac2bac" }}
                      href="#!"
                      role="button"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#0082ca" }}
                      href="#!"
                      role="button"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#333333" }}
                      href="#!"
                      role="button"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </footer>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
