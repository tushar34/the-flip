import React from "react";
const CardSection = (props) => {
  console.log(props);
  return (
    <div className="sec_4_box">
      <img src={props.img} alt="loading" />
      <h4>{props.h4}</h4>
      <p>{props.p}</p>
    </div>
  );
};

export default CardSection;
