import React from "react";

const SkillCard = props => {
  return (
    <div
      className="card"
      style={{
        textAlign: "center",
        background: "transparent",
        margin: 25
      }}
    >
      <img src={props.img} width="70" height="70" alt={props.label} />
      <label style={{ fontSize: 18, marginTop: 10 }}>{props.label}</label>
    </div>
  );
};

export default SkillCard;
