import React from "react";

function Button(props) {
  const { style, label, onClick } = props;

  const styles = {
    button: {
      ...style,
      fontWeight: "600",
      padding: "15px 30px",
      letterSpacing: "0.05em",
      border: "0",
      borderRadius: "9999px",
      cursor: "pointer",
      transition: "all 250ms ease-in-out",
    },
  };

  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
}

export default Button;
