import React from "react";
import "./Shoe_item.css";
import shoe1 from "../../../assets/Frame2/Shoe_item/Frame2_shoe1.png";

const Shoe_item = () => {
  return (
    <div className="frame2_item_container">
      <img src={shoe1} alt="" />
      <h2 className="frame2_item_container_desp">
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
      </h2>
      <button className="view_product">
        View Product - <span className="price">$125</span>
      </button>
      <div className="new">New</div>
    </div>
  );
};

export default Shoe_item;
