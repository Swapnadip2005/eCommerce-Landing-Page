import React from "react";
import "./Review.css";
import Star from "../../../assets/Frame4/Review_card/Star.png";
import User from "../../../assets/Frame4/Review_card/User.jpg";
import Review_image from "../../../assets/Frame4/Review_card/Review_image.png";

const Review = () => {
  return (
    <div className="review_container">
      <div className="review_content">
        <div className="review_desp">
          <h3>Good Quality</h3>
          <p>I highly recommend shopping from Kicks</p>
          <div className="rating">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <p>5.0</p>
          </div>
        </div>
        <img src={User} alt="" />
      </div>
      <div className="review_image">
          <img src={Review_image} alt="" />
        </div>
    </div>
  );
};

export default Review;
