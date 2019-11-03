import PersonCard from "./PersonCard";
import styles from "./Leadership.modules.css";

import elan from "../static/images/elan.svg";
import marcel from "../static/images/marcel.svg";
import mike from "../static/images/mike.svg";
import tom from "../static/images/tom.svg";
import path from "../static/images/path.svg";

const people = [
  {
    image: elan,
    pathOffset: "-13rem",
    name: "Elan Blutinger",
    position: "Founder & CEO",
    description:
      "Elan founded Alpine in 1996. Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies. He is a former Director of Great Wolf Resorts, Hotels.com, and Chairman/CEO of AudioNow Holdings his most recent tech exit. Elan is an entrepreneur, investor, and speaks 5 languages."
  },
  {
    image: marcel,
    pathOffset: "-17rem",
    name: "Marcel Barbulescu",
    position: "Chief Strategy Officer",
    description:
      "Marcel is a leading and recognized technologist in the field of AI, software engineering, and telecommunications. He is the recipient of multiple awards on the use of Artificial Intelligence (AI) and learning agents for security and military applications. Marcel has a M.Sc. and a Ph.D. ABD in Computer Science from George Mason."
  },
  {
    image: mike,
    pathOffset: "-21rem",
    name: "Mike Sands",
    position: "Chief Investment Officer",
    description:
      "Mike was most recently co-founder and CEO of Signal, an enterprise SaaS martech company. He was part of the original Orbitz management team and held the positions of CMO and COO. Mike took the business from start-up to IPO, and through two acquisitions (Cendant and Blackstone). He was a director of Angie's List & Youbet and a partner at PE firm The Pritzker Group."
  },
  {
    image: tom,
    pathOffset: "-24rem",
    name: "Tom Isaacson",
    position: "Chief IP Legal Counsel",
    description:
      "Tom is an equity shareholder at Polsinelli P.C. He understands the intricacies associated with new technologies, and provides clients with effective patent management and protection. Tom focuses on patent and trademark prosecution and litigation, and serves a range of clients, including Fortune 100 companies to start-ups. He is the named inventor on 18 patents."
  }
];

const Leadership = () => {
  return (
    <>
      <div className={styles.leadershipContainer}>
        <div className={styles.path}>
          <img src={path} />
        </div>
        <div className={styles.leadershipTitle}>
          <h1>LEADERSHIP</h1>
        </div>
        <div className={styles.peopleContainer}>
          {people.map(person => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Leadership;
