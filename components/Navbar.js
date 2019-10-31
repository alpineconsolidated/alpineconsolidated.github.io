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
            <div onClick={this.onMenuClick} className={styles.burgerMenu}>
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
                <Link href="/TEC">
                  <a
                    className={
                      this.props.router.route === "/TEC"
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
        </nav>
        {this.state.menuVisible && (
          <div className={styles.mobileMenu}>
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
                      this.props.router.route === "/TEC"
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
        )}
        <div className={styles.spacer}></div>
      </>
    );
  }
}
export default withRouter(Navbar);
