import React from "react";
import "./Footer.css";
import Logo_Small from "../../assets/Footer/Logo_small.png";
import Logo_Big from "../../assets/Footer/Logo_Big.png";
import Plus from "../../assets/Footer/Plus.png";
import FB from "../../assets/Footer/Facebook.png";
import Insta from "../../assets/Footer/Insta.png";
import TikTok from "../../assets/Footer/TikTok.png";
import Tweet from "../../assets/Footer/Tweet.png";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_top_content">
            <h1>
              Join out kickplus <br /> club & get 15% off
            </h1>
            <p>Sign up for free! Join the community.</p>
            <form>
              <input type="email" placeholder="Email address" />
              <button>Submit</button>
            </form>
          </div>
          <div className="footer_logo_container">
            <img src={Logo_Small} alt="" className="footer_logo" />
            <img src={Plus} alt="" className="plus" />
          </div>
          <div className="footer_bottom">
            <div className="footer_bottom_content">
              <div className="about_us">
                <h2>About us</h2>
                <p>
                  We are the biggest hyperstore in the universe. We got you all
                  cover with our exclusive collections and latest drops.
                </p>
              </div>
              <div className="categories">
                <h2>Categories</h2>
                <ul>
                  <li>Runners</li>
                  <li>Sneakers</li>
                  <li>Basketball</li>
                  <li>Outdoor</li>
                  <li>Golf</li>
                  <li>Hiking</li>
                </ul>
              </div>
              <div className="company">
                <h2>Company</h2>
                <ul>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Vlog</li>
                </ul>
              </div>
              <div className="follow_us">
                <h2>Follow us</h2>
                <div className="social">
                  <img src={FB} alt=""/>
                  <img src={Insta} alt=""/>
                  <img src={TikTok} alt=""/>
                  <img src={Tweet} alt=""/>
                </div>
              </div>
            </div>
            <div className="logo_big">
              <img src={Logo_Big} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">&copy; All rights reserved | Made with ❤️</p>
    </>
  );
};

export default Footer;
