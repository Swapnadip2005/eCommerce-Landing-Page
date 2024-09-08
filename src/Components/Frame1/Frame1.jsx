import React from "react";
import "./Frame1.css";
import Product1 from "../../assets/Frame1/frame1_product1.png";
import Product2 from "../../assets/Frame1/frame1_product2.png";

const Frame1 = () => {
  return (
    <>
      <div className="heading">
        <h1 className="heading_text">
          Do it <span className="right">right</span>
        </h1>
      </div>
      <div className="banner">
        <div className="banner_content">
          <h1 className="banner_heading">Nike air max</h1>
          <p className="banner_para">
            Nike introducing the new air max for everyone's comfort
          </p>
          <button className="shop_now">Shop Now</button>
        </div>
        <div className="banner_product">
          <img src={Product1} alt="" className="banner_product1"/>
          <img src={Product2} alt="" className="banner_product2"/>
        </div>
        <div className="product_tag">
          <p>Nike product of the year</p>
        </div>
      </div>
    </>
  );
};

export default Frame1;
