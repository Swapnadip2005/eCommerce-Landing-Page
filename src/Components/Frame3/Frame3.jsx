import React from "react";
import "./Frame3.css";
import button from "../../assets/Frame3/Button.png";

export const Frame3 = () => {
  return (
    <div className="frame3_container">
      <div className="frame3_header">
        <h1 className="frame3_heading">Categories</h1>
      </div>
      <div className="frame3_category">
        <div className="shoe1">
          <div className="shoe1_content">
            <h1 className="shoe1_heading">Lifestyle shoes</h1>
            <img src={button} alt="" />
          </div>
        </div>
        <div className="shoe2">
          <div className="shoe2_content">
            <h1 className="shoe2_heading">Basketball shoes</h1>
            <img src={button} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
