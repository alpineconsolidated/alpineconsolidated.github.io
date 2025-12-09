import React from "react";
import Image from "next/image";
import styles from "./PersonCard.module.css";
import path from "../static/images/path.svg";

const PersonCard = props => {
  return (
    <div className={styles.container}>
      <div
        style={{ left: `${props.person.pathOffset}` }}
        className={styles.path}
      >
        <div>
          <Image src={path} />
        </div>
      </div>
      <Image className={styles.image} src={props.person.image} />
      <h2 className={styles.name}>{props.person.name}</h2>
      <h5 className={styles.position}>{props.person.position}</h5>
      <p className={styles.description}>{props.person.description}</p>
    </div>
  );
};

export default PersonCard;
