import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`${props.contact ? styles.btnFull : styles.btnEmpty} ${
        styles.btn
      }`}
    >
      {props.hashLink ? (
        <a href={props.hashLink}>{props.text}</a>
      ) : (
        `${props.text}`
      )}
    </button>
  );
}

export default Button;
