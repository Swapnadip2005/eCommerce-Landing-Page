import React from "react";
import "./Frame2.css";
import Shoe_item from "./Shoe_item/Shoe_item";

const Frame2 = () => {
  return (
    <>
      <div className="frame2_heading">
        <h1 className="frame2_heading_text">Don't miss out new drops</h1>
        <button className="shop_new_drops">Shop new drops</button>
      </div>
      <div className="shoe_item">
        <Shoe_item></Shoe_item>
        <Shoe_item></Shoe_item>
        <Shoe_item></Shoe_item>
        <Shoe_item></Shoe_item>
      </div>
    </>
  );
};

export default Frame2;
