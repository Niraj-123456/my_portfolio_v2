import React from "react";
import "./button.css";

function Button(props) {
  const { style, label, onClick } = props;

  return (
    <button onClick={onClick} style={style} className="custom-button">
      {label}
    </button>
  );
}

export default Button;
