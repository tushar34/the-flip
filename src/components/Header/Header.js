import React, { useState } from "react";
import "./Header.scss";
import "../../mediaquery.scss";
import { Link } from "react-scroll";

export default function Header() {
  const [headerlinkshow, setheaderlinkshow] = useState(false);
  return (
    <div className="header" id="home">
      <div className="header_title">
        <span>StopTheFlip</span>
      </div>
      <div className="header_nav">
        <ul className="header_ul">
          {headerlinkshow && (
            <>
              <li className="nav-item">
                <Link
                  onClick={(e) => setheaderlinkshow(!headerlinkshow)}
                  className="nav_anchor"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={(e) => setheaderlinkshow(!headerlinkshow)}
                  className="nav_anchor"
                  to="whatwedo"
                  spy={true}
                >
                  What We Do
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  onClick={(e) => setheaderlinkshow(!headerlinkshow)}
                  className="nav_anchor"
                  to="aboutus"
                  spy={true}
                >
                  About US
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  onClick={(e) => setheaderlinkshow(!headerlinkshow)}
                  class="nav_anchor"
                  to="Contact US"
                  spy={true}
                >
                  Contact US
                </Link>
              </li>
            </>
          )}
        </ul>
        {/* <button> */}
        <button className="b_icon">
          {!headerlinkshow ? (
            <i
              className="fas fa-bars"
              onClick={(e) => setheaderlinkshow(!headerlinkshow)}
            ></i>
          ) : (
            <i
              className="fas fa-times"
              onClick={(e) => setheaderlinkshow(!headerlinkshow)}
            ></i>
          )}
        </button>
      </div>
    </div>
  );
}
