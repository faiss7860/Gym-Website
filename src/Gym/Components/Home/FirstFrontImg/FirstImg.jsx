import React from "react";
import { Link } from "react-router-dom";
import "../FirstFrontImg/FirstImg.css";

const FirstImg = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero1">
          <div className="home-header">
            <div className="fp">
              <h5 className="buld_up">BULID UP YOUR</h5>
              <h1 className="strength">
                <span>STRENGTH</span>
              </h1>
              <h4>Bulid Your Body and Fitness Professional Touch</h4>
              <Link to='/MemberShip'><button>
                <h3 className="label" >Join Now</h3>
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstImg;
