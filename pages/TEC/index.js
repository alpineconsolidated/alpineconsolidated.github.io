import Page from "../../layouts/Page";
import Head from "next/head";
import Hero from "../../components/HeroVentures";
import Testimonial from "../../components/Testimonial";
import LetterBox from "../../components/LetterBox";
import ColumnBox from "../../components/ColumnBox";
import Map from "../../components/Map";
import styles from "./index.module.css";

import triangle5 from "../../static/images/triangle5.svg";

class AlpineTEC extends React.Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
  }

  scrollToSection = () => {
    this.sectionRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Page>
        <Head>
          <title>Alpine TEC</title>
        </Head>
        <section className={`${styles.hero} black`}>
          <Hero scrollToSection={this.scrollToSection} />
        </section>

        <section className="whiteTEC">
          <Testimonial />
        </section>

        <section style={{ position: "relative" }} className="whiteTEC">
          <span
            ref={this.sectionRef}
            style={{ position: "absolute", top: "-40px" }}
          />
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
                  We are most interested in SaaS companies and tech-enabled
                  services business or digital transformation opportunities in
                  more traditional situations.
                </h3>
                <div className="showOnSmallTablet">
                  <div className={styles.imageContainer}>
                    <div className={styles.triangleImage}>
                      <img className="responsive-image" src={triangle5} />
                    </div>
                  </div>
                </div>
                <p>
                  Our team has experience across a broad number of sectors. We
                  want to rely on the entrepreneur to provide the domain
                  knowledge while we lean in on the technology and help with the
                  go-to-market.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="white">
          <Map />
        </section>
      </Page>
    );
  }
}
export default AlpineTEC;
