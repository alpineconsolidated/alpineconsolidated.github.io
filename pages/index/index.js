import Page from "../../layouts/Page";
import Head from "next/head";
import Hero from "../../components/Hero";
import Parallax from "../../components/Parallax";
import Leadership from "../../components/Leadership";
import Advisors from "../../components/Advisors";

import styles from "./index.modules.css";

import triangle1 from "../../static/images/triangle1.png";
import triangle2 from "../../static/images/triangle2.png";
import moutains from "../../static/images/mountains-advisors.svg";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.firstFoldRef = React.createRef();
  }

  scrollToSection = () => {
    this.firstFoldRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Page>
        <Head>
          <title>Alpine Consolidated</title>
        </Head>
        <section className={`${styles.hero} black`}>
          <Hero scrollToSection={this.scrollToSection} />
        </section>
        <section style={{ position: "relative" }} className={`white`}>
          <span
            ref={this.firstFoldRef}
            style={{ position: "absolute", top: "-90px" }}
          />
          <div className="column-grid">
            <div className="hideOnSmallTablet box-half">
              <div className={styles.imageContainer}>
                <Parallax image={{ url: triangle1, id: "1" }} />
              </div>
            </div>
            <div className={`${styles.textContainer} box-half`}>
              <div>
                <h1>
                  <span className="noWrap">OUR FOCUS</span>
                </h1>
                <h3>
                  We invest in entrepreneurs who we can help make waves
                  developing new services across multiple sectors of today’s
                  economy.
                </h3>

                <div className="showOnSmallTablet">
                  <div className={styles.imageContainer}>
                    <Parallax image={{ url: triangle1, id: "1" }} />
                  </div>
                </div>

                <p>
                  Since 1996, Alpine Consolidated and its team have structured,
                  led, and delivered multiple initial public offerings and exits
                  in the US and the UK, delivering outsized returns to investors
                  and successful exits every time. It has created new industry
                  leaders in fragmented industries by backing disciplined and
                  practical innovators that have redefined business for the 21st
                  century.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`white`}>
          <div className="column-grid">
            <div className={`box-half`}>
              <div>
                <h1 className="noWrap">OUR EXPERIENCE</h1>
                <h3>
                  We are seasoned investors and entrepreneurs with deep
                  management experience who do more than invest capital.
                </h3>

                <div className="showOnSmallTablet">
                  <div className={styles.imageContainer}>
                    <Parallax image={{ url: triangle2, id: "2" }} />
                  </div>
                </div>

                <p>
                  Our team members have experience as founders, investors,
                  directors or management in a number of public and private
                  companies including Travel Services International (NASDAQ:
                  TRVL), Resortquest International (NYSE: RZT), Hotels.Com
                  (NASDAQ: ROOM), Online Travel Corp (LSE:OTC), Great Wolf
                  Resorts (NYSE: WOLF), Orbitz (NASDAQ: ORBZ), YouBet (NASDAQ:
                  UBET) and Angie’s List (NASDAQ: ANGI). Our privately-held
                  ventures include Vacationlink (acquired by Kinderhook
                  Industries), AudioNow (acquired by Zeno Media), Espresoh
                  Technologies (acquired by Alpine Consolidated) SIM Partners
                  (acquired by Reputation.com), Signal and ParkWhiz.
                </p>
                <br />
                <br />
                <p>
                  We are seasoned investors and executives with deep management
                  experience who do more than invest capital. We are “all in”
                  for the Entrepreneurs, we support and provide critical
                  services so our ventures can focus on product development and
                  sales.    
                </p>
              </div>
            </div>

            <div className={`box-half hideOnSmallTablet`}>
              <div
                style={{ justifyContent: "flex-end" }}
                className={styles.imageContainer}
              >
                <Parallax image={{ url: triangle2, id: "2" }} />
              </div>
            </div>
          </div>
        </section>
        <section style={{ position: "relative" }} className="black">
          <span id="leadership" style={{ position: "absolute", top: "-70px" }}>
            {" "}
          </span>
          <Leadership />
        </section>
        <section className={`${styles.advisorsSection}`}>
          <div className={styles.mountains}>
            <img src={moutains} />
          </div>
          <div className={styles.greyBackground} />
          <span style={{ position: "absolute", top: "-40px" }} id="advisors">
            {" "}
          </span>
          <Advisors />
        </section>
      </Page>
    );
  }
}

export default Index;
