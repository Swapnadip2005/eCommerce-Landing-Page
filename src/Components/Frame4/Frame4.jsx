import React from "react";
import "./Frame4.css";
import Review from "./Review_card/Review";

const Frame4 = () => {
  return (
    <>
      <div className="frame4_heading">
        <h1 className="reviews">Reviews</h1>
        <button className="see_all">See all</button>
      </div>
      <div className="review_card">
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </>
  );
};

export default Frame4;
