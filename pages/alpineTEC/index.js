import Page from "../../layouts/Page";
import Hero from "../../components/HeroVentures";
import Testimonial from "../../components/Testimonial";
import LetterBox from "../../components/LetterBox";
import ColumnBox from "../../components/ColumnBox";
import Map from "../../components/Map";
import styles from "./index.modules.css";

const AlpineTEC = () => (
  <Page>
    <section className={`${styles.hero} black`}>
      <Hero />
    </section>

    <section className="whiteTEC">
      <Testimonial />
    </section>
  </Page>
);

export default AlpineTEC;
