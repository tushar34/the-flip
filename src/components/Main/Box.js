import React from "react";

export default function Box(props) {
  return (
    <div className="box" style={{ boxShadow: "0 0 2.5rem 0 rgb(0 0 0 / 13%)" }}>
      <div className="icon">
        <img width="70px" src={props.img} alt="image not avalible" />
      </div>
      <div className="box-heading">
        <p>{props.p1}</p>
        <h4>{props.h4}</h4>
      </div>
      <div className="box-info">
        <p>{props.p2}</p>
      </div>
    </div>
  );
}
