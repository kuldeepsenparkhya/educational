import React from "react";
import Header from "../components/layout/Header";
import BannerSection from "../components/homePageSection/BannerSection/BannerSection";
import TrusteedCompaines from "../components/homePageSection/trusteedCompaines/TrusteedCompaines";
import DevelopmentService from "../components/homePageSection/DevelopmentService/DevelopmentService";
import ChooseUsSection from "../components/homePageSection/chooseUsSection/ChooseUsSection";
import FeedbackFromClientSection from "../components/homePageSection/feedbackFromClientSection/FeedbackFromClientSection";
import Footer from "../components/layout/Footer";
import FolioSection from "../components/homePageSection/folioSection/FolioSection";
import WorksSection from "../components/homePageSection/worksSection/WorksSection";
import OurTeamSection from "../components/homePageSection/ourTeamSection/OurTeamSection";
import ParticlesBackground from "../components/homePageSection/ParticlesBackground/ParticlesBackground"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
       <ParticlesBackground />
      <Header />
      <BannerSection />
      <div data-aos="fade-up">
        <TrusteedCompaines />
      </div>
      <div data-aos="zoom-in">
        <DevelopmentService />
      </div>
      <div data-aos="fade-up">
        <ChooseUsSection />
      </div>
      <div data-aos="zoom-in">
        <OurTeamSection />
      </div>
      <div data-aos="zoom-in">
        <FolioSection />
      </div>
      <div data-aos="fade-up">
        <FeedbackFromClientSection />
      </div>
      <div data-aos="zoom-in">
        <WorksSection />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
