import Page from "../../layouts/Page";
import Hero from "../../components/Hero";
import Parallax from "../../components/Parallax";
import PersonCard from "../../components/PersonCard";

import styles from "./index.modules.css";

import triangle1 from "../../static/images/triangle1.png";
import triangle2 from "../../static/images/triangle2.png";

const Index = props => (
  <Page>
    <section className={`${styles.hero} black`}>
      <Hero />
    </section>
    <section className={`white`}>
      <div className="column-grid">
        <div className="hideOnSmallTablet box-half">
          <Parallax image={triangle1} />
        </div>
        <div className={`${styles.textContainer} box-half`}>
          <div>
            <h1>
              <span className="noWrap">OUR FOCUS</span>
            </h1>
            <h3>
              We invest in entrepreneurs who we can help make waves developing
              new services across multiple sectors of today’s economy.
            </h3>

            <div className="showOnSmallTablet">
              <Parallax image={triangle1} />
            </div>

            <p>
              Since 1996, Alpine Consolidated and its team have structured, led
              and delivered multiple initial public offerings and exits in the
              US and the UK delivering outsized returns to investors and
              successful exits every time. It has created new industry leaders
              in fragmented industries by backing disciplined and practical
              innovators that have redefined business for the 21st century.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Page>
);

export default Index;
