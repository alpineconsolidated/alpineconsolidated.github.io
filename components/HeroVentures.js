import React, { Component } from "react";
import styles from "./Hero.modules.css";
import Button from "./Button";

class Hero extends Component {
  render() {
    return (
      <div className="column-grid">
        <div className="box-half">
          <div className={styles.textBox}>
            <h1>
              <span style={{ whiteSpace: "nowrap" }}>ACCELERATING</span> <br />
              <span style={{ whiteSpace: "nowrap" }}>THE CLIMB</span>
            </h1>
            <h4>We help founders build their dreams and scale for success</h4>
            <div className={styles.buttons}>
              <Button text="CONTACT US" contact />
              <Button text="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
