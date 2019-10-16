import Link from "next/link";
import styles from "./Navbar.modules.css";
import { withRouter } from "next/router";

class Navbar extends React.Component {
  state = {
    menuVisible: false,
    closing: false
  };
  onMenuClick = () => {
    this.setState({
      closing: !this.state.closing,
      menuVisible: !this.state.menuVisible
    });
  };
  render() {
    return (
      <>
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.container} box-wide`}>
            <div className={styles.logo}>
              <img src={this.props.logo}></img>
            </div>
            <div onClick={this.onMenuClick} className={styles.mobileMenuIcon}>
              <div
                className={`${styles.menuLine} ${
                  this.state.closing ? styles.closing : ""
                }`}
              ></div>
              <div
                className={`${styles.menuLine} ${
                  this.state.closing ? styles.closing : ""
                }`}
              ></div>
              <div
                className={`${styles.menuLine} ${
                  this.state.closing ? styles.closing : ""
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
              <li className={styles.menuItem}>
                <Link href="/alpinetec">
                  <a
                    className={
                      this.props.router.route === "/alpinetec"
                        ? styles.active
                        : ""
                    }
                  >
                    AlpineTEC Ventures
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
          {this.state.menuVisible && (
            <ul className={styles.mobileMenu}>
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
                <Link href="/alpinetec">
                  <a
                    className={
                      this.props.router.route === "/alpinetec"
                        ? styles.active
                        : ""
                    }
                  >
                    AlpineTEC Ventures
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          )}
        </nav>
        <div
          className={this.state.closing ? styles.offset : styles.spacer}
        ></div>
      </>
    );
  }
}
export default withRouter(Navbar);
