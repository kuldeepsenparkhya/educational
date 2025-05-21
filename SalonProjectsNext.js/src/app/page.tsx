import React from 'react'
import HeaderTop from "../layout/HeaderTop.jsx"
import Header from "../layout/Header.jsx"
import Footer from "@/layout/Footer.jsx"
import Welcome from "@/components/landingPage/welcome/welcome.jsx"
import Services from "@/components/landingPage/services/services.jsx"
import Center from "@/components/landingPage/center/Center.jsx"
import Banner from "../components/landingPage/banner/Banner.jsx"
import Experience from "@/components/landingPage/experience/experince.jsx"
import Products from "@/components/landingPage/products/Products.jsx"
import Appointment from "@/components/landingPage/appointment/appointment.jsx"
import Offers from "@/components/landingPage/offers/offers.jsx"

const page = () => {
  return (
    <>
      <div>
        <div id="home">
          <HeaderTop />
          <Header />
          <Banner />
        </div>
        <div id="about">
          <Welcome />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="shop">
          <Center />
          <Experience />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="offers">
          <Offers />
        </div>
        <div id="contact">
          <Appointment />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default page