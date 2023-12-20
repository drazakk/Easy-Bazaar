import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg_img">
    <footer id="footer">
      
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>

        <div className="midFooter">
          <h1>Easy Bazzar</h1>
          <p>High Quality is our first priority</p>
          <p>Copyrights 2023 &copy; Garima and Deepanshu</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <div className="links">
            <a href="http://instagram.com/depanshu.23">Instagram</a>
            <a href="http://youtube.com/drazakk">Youtube</a>
            <a href="https://www.facebook.com/depanshusinghh">Facebook</a>
          </div>
        </div>
    </footer>
    </div>

  );
};

export default Footer;
