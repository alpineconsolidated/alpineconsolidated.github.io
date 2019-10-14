import React, { Component } from "react";
import styles from "./Hero.modules.css";

class Hero extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.specialTitle}>
          WASHINGTON BASED VENTURE INVESTMENT COMPANY SINCE 1996
        </h1>
        <p>
          An unparalleled history of successful investor returns by
          capitalizing, growing, and exiting unique business models in
          industries few could envision.
        </p>
      </div>
    );
  }
}

export default Hero;
