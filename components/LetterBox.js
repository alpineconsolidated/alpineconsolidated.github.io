import image from "../static/images/triangle4.png";
import styles from "./LetterBox.modules.css";

const LetterBox = () => {
  return (
    <>
      <div className={`${styles.firstSection} column-grid`}>
        <div className={`${styles.textContainer} box-half`}>
          <div>
            <h1>
              AlpineTEC
              <br /> IS THE <br />
              DIFFERENCE
            </h1>
            <h3>
              At AlpineTEC Ventures we bring a unique combination of Technology,
              Experience and Capital to our partners and portfolio.
            </h3>
          </div>
        </div>
        <div className="box-half">
          <div className={`${styles.imageBox}`}>
            <div className={styles.imageContainer}>
              <img className="responsive-image" src={image} />
            </div>
          </div>
        </div>
      </div>
      <div className={` column-grid`}>
        <div className={`${styles.letterBox} box-third`}>
          <h1 className={styles.bigLetter}>T</h1>

          <div className={styles.textContent}>
            <h2 className={styles.title}>TECHNOLOGY</h2>
            <p>
              Alpine employs technology resources including engineers and
              architects, UI/UX and design experts capable of rapid prototyping
              to full product lifecycle... you dream it and we can help build
              it.
            </p>
          </div>
        </div>
        <div className={`${styles.letterBox} box-third`}>
          <h1 className={styles.bigLetter}>E</h1>

          <div className={styles.textContent}>
            <h2 className={styles.title}>EXPERIENCE</h2>
            <p>
              Alpine and our advisors bring hundreds of years of practical
              experience to help our portfolio companies validate product market
              fit, get in front of buyers and find your customers.
            </p>
          </div>
        </div>
        <div className={`${styles.letterBox} box-third`}>
          <h1 className={styles.bigLetter}>C</h1>

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
