import image from "../static/images/triangle4.png";
import styles from "./LetterBox.modules.css";

const LetterBox = () => {
  return (
    <>
      <div className="column-grid">
        <div className={`${styles.textContainer} box-half`}>
          <div>
            <h1>
              AlpineTEC IS <br />
              THE DIFFERENCE
            </h1>
            <h3>
              At AlpineTEC Ventures we bring a unique combination of Technology,
              Experience and Capital to our partners and portfolio.
            </h3>
          </div>
        </div>
        <div className={`${styles.imageBox} box-half`}>
          <div className={styles.imageContainer}>
            <img className="responsive-image" src={image} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.boxesContainer}>
        <div className={styles.letterBox}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>TECH</h2>
            <p>
              Alpine employs technology resources including engineers and
              architects, UI/UX and design experts capable of rapid prototyping
              to full product lifecycle... you dream it and we can help build
              it.
            </p>
          </div>
        </div>
        <div className={styles.letterBox}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>EXPERIENCE</h2>
            <p>
              Alpine and our advisors bring hundreds of years of practical
              experience to help our portfolio companies validate product market
              fit, get in front of buyers and find your customers.
            </p>
          </div>
        </div>
        <div className={styles.letterBox}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>CAPITAL</h2>
            <p>
              Alpine and its partners bring the access to capital necessary for
              a company to scale and grow... we've been in your shoes as
              entrepreneurs ourselves raising funds for the companies we have
              founded.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterBox;
