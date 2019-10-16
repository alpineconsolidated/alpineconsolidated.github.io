import Page from "../../layouts/Page";
import Hero from "../../components/Hero";
import Parallax from "../../components/Parallax";

import styles from "./index.modules.css";

import triangle1 from "../../static/images/triangle1.png";
import triangle2 from "../../static/images/triangle2.png";

const Index = props => (
  <Page>
    <section className={`${styles.hero} black`}>
      <Hero />
    </section>
  </Page>
);

export default Index;
