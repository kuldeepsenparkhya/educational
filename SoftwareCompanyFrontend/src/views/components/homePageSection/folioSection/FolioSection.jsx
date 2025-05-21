import React from "react";
import port1 from "../../../../assets/images/port1.png";
import port2 from "../../../../assets/images/port2.png";
import port3 from "../../../../assets/images/port3.png";
import port4 from "../../../../assets/images/port4.png";
import port5 from "../../../../assets/images/port5.png";
import port6 from "../../../../assets/images/port6.png";
import "./FolioSection.css";

const portfolioImages = [port1, port2, port3, port4, port5, port6];

const FolioSection = () => {
  return (
    <div className="folio-section container py-5">
      <div className="text-center mb-5">
        <p className="text-success fw-bold">→ Portfolio</p>
        <h4 className="display-8 fw-semibold">The Best Folio</h4>
        <p className="mt-3 text-muted">
          Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and
          quality of one of Saskatoon’s premier home builders.
        </p>
      </div>

      <div className="row g-4">
        {portfolioImages.map((image, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div className="folio-image-wrapper shadow-sm rounded overflow-hidden">
              <img src={image} alt={`Portfolio ${index + 1}`} className="img-fluid folio-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolioSection;
