import PersonCard from "./PersonCard";
import PersonModal from "./PersonModal";

import styles from "./Leadership.modules.css";

import elan from "../static/images/elan.svg";
import marcel from "../static/images/marcel.svg";
import mike from "../static/images/mike.svg";
import tom from "../static/images/tom.svg";
import path from "../static/images/path.svg";
import close from "../static/images/close.svg";

const people = [
  {
    image: elan,
    pathOffset: "-13rem",
    name: "Elan Blutinger",
    position: "Founder & CEO",
    description:
      "founded Alpine in 1996.  Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies.  Elan is a former Director of Great Wolf Resorts, Hotels.com […]",
    fullDescription:
      "Founder & CEO, founded Alpine in 1996. Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies. Elan is a former Director of Great Wolf Resorts, Hotels.com, and Chairman/CEO of AudioNow Holdings his most recent tech exit. Elan is an entrepreneur, investor, and speaks 5 languages."
  },

  {
    image: marcel,
    pathOffset: "-17rem",

    name: "Marcel Barbulescu",
    position: "Chief Strategy Officer",
    description:
      "was most recently co-founder and CEO of Signal, an enterprise SaaS martech company.  Mike was part of the original Orbitz management team and held the positions of CMO and COO. Mike took the […]",

    fullDescription:
      "Chief Strategy Officer, is a leading and recognized technologist in the field of AI, software engineering, and telecommunications. He is the recipient of multiple awards on the use of Artificial Intelligence (AI) and learning agents for security and military applications. He has a M.Sc. Ph.D. ABD in Computer Science from George Mason, and a degree from the Polytechnica University in Romania."
  },
  {
    image: mike,
    pathOffset: "-21rem",
    name: "Mike Sands",
    position: "Chief Investment Officer",
    description:
      "shareholder at Polsinelli P.C. Thomas understands the intricacies associated with new technologies, and provides clients with effective patent management and […]",
    fullDescription:
      "Chief Investment Officer, was most recently co-founder and CEO of Signal, an enterprise SaaS martech company. Mike was part of the original Orbitz management team and held the positions of CMO and COO. Mike took the business from start-up to IPO, and through two acquisitions (Cendant and Blackstone). Mike was a director of Angie's List & Youbet and a partner at PE firm The Pritzker Group."
  },
  {
    image: tom,
    pathOffset: "-24rem",
    name: "Tom Isaacso",
    position: "Chief IP Legal Counsel and Advisory Board member",
    description:
      "founded Alpine in 1996.  Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies.  Elan is a former Director of Great Wolf Resorts, Hotels.com […]",
    fullDescription:
      "Chief IP Legal Counsel, is an equity shareholder at Polsinelli P.C. Thomas understands the intricacies associated with new technologies, and provides clients with effective patent management and protection. Tom focuses on patent and trademark prosecution and litigation, and serves a range of clients, including Fortune 100 companies to start-ups. He is the named inventor on 18 patents."
  }
];

class Leadership extends React.Component {
  state = {
    showModal: false,
    currentModal: {
      image: "",
      name: "",
      position: "",
      description: "",
      fullDescription: ""
    }
  };

  showPersonModal = person => {
    this.setState({ showModal: true, currentModal: person });
  };

  hidePersonModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { image, name, position, fullDescription } = this.state.currentModal;
    return (
      <>
        {!this.state.showModal ? (
          <div className={styles.leadershipContainer}>
            <div className={styles.path}>
              <img src={path} />
            </div>
            <div className={styles.leadershipTitle}>
              <h1>LEADERSHIP</h1>
            </div>
            <div className={styles.peopleContainer}>
              {people.map(person => (
                <PersonCard
                  key={person.name}
                  person={person}
                  showPersonModal={this.showPersonModal}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.personModalContainer}>
            <PersonModal
              path={path}
              image={image}
              name={name}
              position={position}
              description={fullDescription}
              hidePersonModal={this.hidePersonModal}
            />
            <div
              onClick={this.hidePersonModal}
              className={styles.closeModalIcon}
            >
              <img src={close} />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Leadership;
