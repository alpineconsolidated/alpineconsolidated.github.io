import Link from "next/link";
import styles from "./Navbar.modules.css";
import { withRouter } from "next/router";

function Navbar(props) {
  console.log(props.router);
  return (
    <nav className={`${styles.navbar} box-wide`}>
      <div>
        <img src={props.logo}></img>
      </div>
      <div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a className={props.router.route === "/" ? styles.active : ""}>
                Alpine Consolidated
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/alpinetec">
              <a
                className={
                  props.router.route === "/alpinetec" ? styles.active : ""
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
  );
}
export default withRouter(Navbar);
