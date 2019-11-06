import React, { Component } from "react";
import styles from "./Hero.modules.css";
import Button from "./Button";

class Hero extends Component {
  render() {
    return (
      <div className="column-grid">
        <div className="box-half">
          <div className={styles.container}>
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
              <h4 className={styles.text}>
                An unparalleled history of successful investor returns by
                capitalizing, growing, and exiting unique business models in
                industries few could envision.
              </h4>
            </div>
            <div className={styles.buttons}>
              <a href="#contact">
                <button className={`${styles.btnFull} ${styles.btn}`}>
                  CONTACT US
                </button>
              </a>

              <button
                className={`${styles.btnEmpty} ${styles.btn}`}
                onClick={() => this.props.scrollToSection()}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
