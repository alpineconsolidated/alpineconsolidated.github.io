import Page from "../../layouts/Page";
import Hero from "../../components/Hero";
import Parallax from "../../components/Parallax";
import PersonCard from "../../components/PersonCard";

import styles from "./index.modules.css";

import triangle1 from "../../static/images/triangle1.png";
import triangle2 from "../../static/images/triangle2.png";
import elan from "../../static/images/elan.svg";
import marcel from "../../static/images/marcel.svg";
import mike from "../../static/images/mike.svg";
import tom from "../../static/images/tom.svg";
import path from "../../static/images/path.svg";

const Index = props => (
  <Page>
    <section className={`${styles.hero} black`}>
      <Hero />
    </section>
    <section className={`white`}>
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
              We invest in entrepreneurs who we can help make waves developing
              new services across multiple sectors of today’s economy.
            </h3>

            <div className="showOnSmallTablet">
              <div className={styles.imageContainer}>
                <Parallax image={{ url: triangle1, id: "1" }} />
              </div>
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
    <section className={`white`}>
      <div className="column-grid">
        <div className={`box-half`}>
          <div>
            <h1 className="noWrap">OUR EXPERIENCE</h1>
            <h3>
              We are seasoned investors and entrepreneurs with deep management
              experience who do more than invest capital.
            </h3>

            <div className="showOnSmallTablet">
              <div className={styles.imageContainer}>
                <Parallax image={{ url: triangle2, id: "2" }} />
              </div>
            </div>

            <p>
              Our team members have experience as founders, investors, directors
              or management in a number of public and private companies
              including Travel Services International (NASDAQ: TRVL),
              Resortquest International (NYSE: RZT), Hotels.Com (NASDAQ: ROOM),
              Online Travel Corp (LSE:OTC), Great Wolf Resorts (NYSE: WOLF),
              Orbitz (NASDAQ: ORBZ), YouBet (NASDAQ: UBET) and Angie’s List
              (NASDAQ: ANGI). Our privately held ventures include Vacationlink
              (acquired by Kinderhook Industries), AudioNow (acquired by Zeno
              Media), Espresoh Technologies (acquired by Alpine Consolidated)
              SIM Partners (acquired by Reputation.com), Signal and ParkWhiz.
            </p>
            <br />
            <br />
            <p>
              We are seasoned investors and executives with deep management
              experience who do more than invest capital. We are “all in” for
              the Entrepreneurs we support and provide critical services so our
              ventures can focus on product development and sales.    
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
    <section className="black">
      <div style={{ position: "relative" }}>
        <div className={styles.path}>
          <img src={path} />
        </div>
        <div className={styles.leadershipTitle}>
          <h1>LEADERSHIP</h1>
        </div>
        <div className={styles.peopleContainer}>
          <PersonCard
            pathOffset="-13rem"
            image={elan}
            name="Elan Blutinger"
            position="Founder & CEO"
            description="founded Alpine in 1996.  Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies.  Elan is a former Director of Great Wolf Resorts, Hotels.com […]"
          />
          <PersonCard
            pathOffset="-17rem"
            image={marcel}
            name="Marcel Barbulescu"
            position="Chief Strategy Officer"
            description="is a leading and recognized technologist in the field of AI, software engineering, and telecommunications. He is the recipient of multiple awards on the use of Artificial Intelligence […]"
          />
          <PersonCard
            pathOffset="-21rem"
            image={mike}
            name="Mike Sands"
            position="Chief Investment Officer"
            description="was most recently co-founder and CEO of Signal, an enterprise SaaS martech company.  Mike was part of the original Orbitz management team and held the positions of CMO and COO. Mike took the […]"
          />
          <PersonCard
            pathOffset="-24rem"
            image={tom}
            name="Tom Isaacson"
            position="Chief IP Legal Counsel and Advisory Board member"
            description="shareholder at Polsinelli P.C. Thomas understands the intricacies associated with new technologies, and provides clients with effective patent management and […]"
          />
        </div>
      </div>
    </section>
  </Page>
);

export default Index;
