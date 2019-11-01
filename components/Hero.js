import React, { Component } from "react";
import styles from "./Hero.modules.css";
import Button from "./Button";

class Hero extends Component {
  render() {
    return (
      <div className="column-grid">
        <div className="box-half">
          <div className={styles.textBox}>
            <h1 className={styles.specialTitle}>
              <span style={{ whiteSpace: "nowrap" }}>WASHINGTON BASED</span>{" "}
              <br />
              <span
                style={{ whiteSpace: "nowrap" }}
                className={styles.highlight}
              >
                VENTURE INVESTMENT
              </span>{" "}
              <br />
              <span style={{ whiteSpace: "nowrap" }}>COMPANY SINCE 1996</span>
            </h1>
            <p className={styles.text}>
              An unparalleled history of successful investor returns by
              capitalizing, growing, and exiting unique business models in
              industries few could envision.
            </p>

            <div className={styles.buttons}>
              <Button hashLink="#contact" text="CONTACT US" contact />
              <Button text="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
