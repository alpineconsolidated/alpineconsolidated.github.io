import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { withRouter } from "next/router";

class Navbar extends React.Component {
  state = {
    menuVisible: false,
    closing: false
  };

  onMenuClick = () => {
    const { menuVisible, closing } = this.state;
    if (closing) return;

    if (!menuVisible) {
      this.setState({ menuVisible: true });
    } else {
      this.setState({ closing: true });
      setTimeout(() => {
        this.setState({ closing: false, menuVisible: false });
      }, 300);
    }
  };

  render() {
    return (
      <>
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.container} box-wide`}>
            <div className={styles.logo}>
              <img src={this.props.logo}></img>
            </div>
            <div onClick={this.onMenuClick} className={styles.burgerMenu}>
              <div
                className={`${styles.menuLine} ${
                  this.state.menuVisible ? styles.closing : ""
                }`}
              ></div>
              <div
                className={`${styles.menuLine} ${
                  this.state.menuVisible ? styles.closing : ""
                }`}
              ></div>
              <div
                className={`${styles.menuLine} ${
                  this.state.menuVisible ? styles.closing : ""
                }`}
              ></div>
            </div>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link href="/">
                  <a
                    className={
                      this.props.router.route === "/" ? styles.active : ""
                    }
                  >
                    Alpine Consolidated
                  </a>
                </Link>
              </li>
{/*
              <li className={styles.menuItem}>
                <Link href="/TEC">
                  <a
                    className={
                      this.props.router.route === "/TEC" ? styles.active : ""
                    }
                  >
                    AlpineTEC Ventures
                  </a>
                </Link>
              </li>
*/}
              <li className={styles.menuItem}>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.menuVisible && (
          <div
            className={`${this.state.closing ? styles.closingMenu : ""} ${
              styles.mobileMenu
            }`}
          >
            <ul>
              <li className={styles.menuItem}>
                <Link href="/">
                  <a
                    className={
                      this.props.router.route === "/" ? styles.active : ""
                    }
                  >
                    Alpine Consolidated
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/TEC">
                  <a
                    className={
                      this.props.router.route === "/TEC" ? styles.active : ""
                    }
                  >
                    AlpineTEC Ventures
                  </a>
                </Link>
              </li>
              <li onClick={this.onMenuClick} className={styles.menuItem}>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
        <div className={styles.spacer}></div>
      </>
    );
  }
}
export default withRouter(Navbar);
