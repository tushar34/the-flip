import React from "react";
import "./Header.scss";
import "../../mediaquery.scss";
export default function Header() {
  return (
    <div className="header">
      <div>
        <span>StopTheFlip</span>
      </div>
      <div>
        <ul className="header_ul">
          <li class="nav-item">
            <a class="nav_anchor" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav_anchor" href="#aboutme">
              What We Do
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav_anchor" href="#skills">
              About US
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav_anchor" href="#skills">
              Contact US
            </a>
          </li>
        </ul>
      </div>
      <div>
        <i class="fas fa-bars" for="menu-toggle"></i>
      </div>
    </div>
  );
}
