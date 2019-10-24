import PersonCard from "./PersonCard";
import PersonModal from "./PersonModal";

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
      "founded Alpine in 1996.  Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies.  Elan is a former Director of Great Wolf Resorts, Hotels.com […]"
  },
  {
    image: marcel,
    pathOffset: "-17rem",

    name: "Marcel Barbulescu",
    position: "Chief Strategy Officer",
    description:
      "was most recently co-founder and CEO of Signal, an enterprise SaaS martech company.  Mike was part of the original Orbitz management team and held the positions of CMO and COO. Mike took the […]"
  },
  {
    image: mike,
    pathOffset: "-21rem",
    name: "Mike Sands",
    position: "Chief Investment Officer",
    description:
      "shareholder at Polsinelli P.C. Thomas understands the intricacies associated with new technologies, and provides clients with effective patent management and […]"
  },
  {
    image: tom,
    pathOffset: "-24rem",
    name: "Tom Isaacso",
    position: "Chief IP Legal Counsel and Advisory Board member",
    description:
      "founded Alpine in 1996.  Through Alpine he subsequently founded, built and IPO’d multiple public technology and travel companies.  Elan is a former Director of Great Wolf Resorts, Hotels.com […]"
  }
];

class Leadership extends React.Component {
  state = {
    showModal: false,
    currentModal: {
      image: "",
      name: "",
      position: "",
      description: ""
    }
  };

  showPersonModal = person => {
    this.setState({ showModal: true, currentModal: person });
  };

  hidePersonModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { image, name, position, description } = this.state.currentModal;
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
              description={description}
              hidePersonModal={this.hidePersonModal}
            />
          </div>
        )}
      </>
    );
  }
}

export default Leadership;
