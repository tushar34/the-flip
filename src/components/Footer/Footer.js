import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer id="Contact US">
      <div className="fdiv">
        <div className="container">
          <div className="footer">
            <div className="footer_content">
              <h4>contact us</h4>
              <div className="info">
                <p>tusharp123p@gmail.com</p>
                <p>+91 9727599219</p>
              </div>
            </div>

            <div className="footer_content">
              <h4>location</h4>
              <div className="info">
                <p>234, silicon height, adajan road, surat, gujarat, india</p>
              </div>
            </div>

            <div className="footer_content">
              <div className="social_icon">
                <i class="fab fa-twitter" style={{ fontSize: "25px" }}></i>
                <i class="fab fa-instagram" style={{ fontSize: "25px" }}></i>
              </div>
              <div className="social_icon">
                <i class="fab fa-linkedin-in" style={{ fontSize: "25px" }}></i>
                <i
                  class="fab fa-facebook-square"
                  style={{ fontSize: "25px" }}
                ></i>
              </div>
            </div>
          </div>

          <hr className="h_r" />

          <div className="right">
            <h4>Copyright © All Rights Reserved</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
