import React from "react";
import styles from "./Button.modules.css";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`${props.contact ? styles.btnFull : styles.btnEmpty} ${
        styles.btn
      }`}
    >
      {props.text}
    </button>
  );
}

export default Button;
