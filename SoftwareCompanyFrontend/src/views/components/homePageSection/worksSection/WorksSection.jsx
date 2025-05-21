import React from "react";
import com1 from "../../../../assets/images/com1.png";
import com2 from "../../../../assets/images/com2.png";
import com3 from "../../../../assets/images/com3.png";
import com4 from "../../../../assets/images/com4.png";
import com5 from "../../../../assets/images/com5.png";
import com6 from "../../../../assets/images/com6.png";
import "./WorksSection.css";

const worksImages = [com1, com2, com3, com4, com5, com6];

const WorksSection = () => {
  return (
    <div className="container py-5 works-section">
      <div className="row mb-4 align-items-stretch">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className="image-card h-100">
            <img src={worksImages[0]} alt="Work 1" className="img-fluid h-100 w-100 object-fit-cover" />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
          <div className="image-card mb-3 flex-fill">
            <img src={worksImages[1]} alt="Work 2" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <div className="image-card flex-fill">
            <img src={worksImages[2]} alt="Work 3" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="image-card">
            <img src={worksImages[3]} alt="Work 4" className="img-fluid w-100 object-fit-cover" />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="image-card">
            <img src={worksImages[4]} alt="Work 5" className="img-fluid w-100 object-fit-cover" />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="image-card">
            <img src={worksImages[5]} alt="Work 6" className="img-fluid w-100 object-fit-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;

