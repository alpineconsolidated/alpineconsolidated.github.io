import styles from "./ColumnBox.module.css";
import path from "../static/images/path.svg";

const ColumnBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.path}>
        <img src={path} />
      </div>
      <div className={styles.title}>
        <h1>
          WHAT <br />
          WE BELIEVE
        </h1>
      </div>
      <div className="column-grid">
        <div className={`${styles.textBox} box-third`}>
          <h3 className={styles.subtitle}>
            Capital is a commodity...
            <br />
            We will do more
          </h3>
          <p>
            At Alpine, we can bring technologists, sales expertise, and
            management assistance to our portfolio. Whatever our partner
            companies need to scale.
          </p>
        </div>
        <div className={`${styles.textBox} box-third`}>
          <h3 className={styles.subtitle}>Entrepreneurship is our passion</h3>
          <p>
            At our core, we are entrepreneurs first and investors second. We
            have walked in your shoes. We have each founded companies, raised
            money, and had sleepless nights. We get it.
          </p>
        </div>
        <div className={`${styles.textBox} box-third`}>
          <h3 className={styles.subtitle}>
            Always enter with the exit in mind
          </h3>
          <p>
            Our focus is helping our entrepreneurs realize their ambitions and
            find their exit. When we invest, we want to work with you on your
            exit strategy from day one, helping scale for a purpose and with an
            outcome in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColumnBox;
