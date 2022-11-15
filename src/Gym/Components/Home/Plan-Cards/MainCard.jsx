import React from "react";
import "../Plan-Cards/MainCard.css";
import plans from "./plans";

const MainCard = () => {

  return(

    <div className="Cards">
    <div className="Card">
      {plans.map((pro, index) => {
        return (
          <div key={index} className="c1">
            <div className="c2">
              <div className="c3">
                <img src={pro.img} alt="" />
                <h4>{pro.title}</h4>
              </div>
              <p>{pro.ditels}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
      )
};

export default MainCard;
