import React from "react";
import Image from "next/image";
import styles from "./Parallax.module.css";

const Parallax = props => {
  return (
    <div
      className={props.image.id === "1" ? styles.smallImage : styles.bigImage}
    >
      <Image className="responsive-image" src={props.image.url} />
    </div>
  );
};

export default Parallax;
