import Page from "../../layouts/Page";
import Hero from "../../components/HeroVentures";
import Testimonial from "../../components/Testimonial";
import LetterBox from "../../components/LetterBox";
import ColumnBox from "../../components/ColumnBox";
import Map from "../../components/Map";
import styles from "./index.modules.css";

import triangle5 from "../../static/images/triangle5.svg";

const AlpineTEC = () => (
  <Page>
    <section className={`${styles.hero} black`}>
      <Hero />
    </section>

    <section className="whiteTEC">
      <Testimonial />
    </section>

    <section className="whiteTEC">
      <LetterBox />
    </section>

    <section className="black">
      <ColumnBox />
    </section>

    <section className={`white`}>
      <div className="column-grid">
        <div className="hideOnSmallTablet box-half">
          <div className={styles.imageContainer}>
            <div className={styles.triangleImage}>
              <img className="responsive-image" src={triangle5} />
            </div>
          </div>
        </div>
        <div className={`${styles.textContainer} box-half`}>
          <div>
            <h1>
              <span className="noWrap">WHAT WE'RE</span>
              <br />
              <span className="noWrap">LOOKING FOR</span>
            </h1>
            <h3>
              We are most interested in SaaS companies and tech enabled services
              business or digital transformation opportunities in more
              traditional situations.
            </h3>

            <div className="showOnSmallTablet">
              <div className={styles.imageContainer}>
                <div className={styles.triangleImage}>
                  <img className="responsive-image" src={triangle5} />
                </div>
              </div>
            </div>

            <p>
              We are most interested in SaaS companies and tech enabled services
              business or digital transformation opportunities in more
              traditional situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Page>
);

export default AlpineTEC;
