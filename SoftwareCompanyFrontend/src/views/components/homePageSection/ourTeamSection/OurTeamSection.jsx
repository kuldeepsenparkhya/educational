import React from "react";
import t1 from "../../../../assets/images/t1.png";
import t2 from "../../../../assets/images/t2.png";
import t3 from "../../../../assets/images/t3.png";
import t4 from "../../../../assets/images/t4.png";
import "./OurTeamSection.css";

const ourTeamImages = [
  {
    image: t1,
    name: "Rajveer Joshi",
    position: "MERN Developer",
  },
  {
    image: t2,
    name: "Aakash Yadav",
    position: "Oracle Database Developer",
  },
  {
    image: t3,
    name: "Hement Vishwakrma",
    position: "Python Developer",
  },
  {
    image: t4,
    name: "Sourav Argade",
    position: "Full Stack developer",
  },
];

const OurTeamSection = () => {
  return (
    <div className="container py-5 team-section">
      <div className="text-center mb-5">
        <p className="text-success fw-bold">→ Our Team</p>
        <h4 className="fw-semibold display-8">Meet Our Experts</h4>
      </div>
      <div className="row g-4">
        {ourTeamImages.map((member, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <div className="team-card shadow-sm rounded text-center p-3">
              <div className="team-img-wrapper mb-3">
                <img src={member.image} alt={member.name} className="img-fluid team-img" />
              </div>
              <h6 className="mb-1">{member.name}</h6>
              <p className="text-muted">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamSection;
