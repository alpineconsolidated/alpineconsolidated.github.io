import ReactDOM from "react-dom";

import styles from "./Advisors.modules.css";
import greenDownArrow from "../static/images/greenDownArrow.svg";
import blackSmallTriangle from "../static/images/blackSmallTriangle.svg";

const advisors = [
  {
    name: "ADAM MCGOWAN",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "ALAN MELTZER",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "CHRISTOPHER ENSLEY",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "DANTE DESPARTES",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "HASAN DOSSAL",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "FRED MALEK, JR",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "JAN ROSENBERG",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "WAYNE RUSCH GARCHIK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "STEVEN GARCHIK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "DANNY BORTNICK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "KIM SCHAEFFER",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "MIKE RAVENSCROFT",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "IMAD KHALIDI",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "FRASER BULLOCK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "JEFFREY POLLACK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "ROBERT KRASNE",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "JOSEPH VITTORIA",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "JOSH LOWENTHAL",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "KATHY KEMPER",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "MIKE BROOKS",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "PATRICK KENNEDY",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "JOHN MEYER",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "PAUL ZEVNIK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "JONATHAN AKERS",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "RICARDO ERNST, PHD",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "RON HOWARD",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "SIMON MARKS",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "WILLIAM B. ALSUP III",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "DAN O’MALLEY",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  }
];

class Advisors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { advisors: advisors };
    this.myRef = [];
  }

  componentDidMount() {
    const advisors = this.state.advisors.map(advisor => {
      if (
        this.myRef[advisor.name].getBoundingClientRect().x >
        window.innerWidth / 2
      ) {
        return {
          name: advisor.name,
          info: advisor.info,
          isOffset: true
        };
      } else return advisor;
    });
    this.setState({ advisors });
  }

  showAdvisorModal = e => {
    const target = this.state.advisors.filter(
      advisor => advisor.name === e.target.id
    );

    const updatedAdvisor = {
      name: target[0].name,
      info: target[0].info,
      showInfo: !target[0].showInfo
    };

    const newAdvisors = this.state.advisors.map(advisor => {
      if (advisor.name === updatedAdvisor.name) {
        return updatedAdvisor;
      }
      return advisor;
    });

    this.setState({ advisors: newAdvisors });
  };

  render() {
    return (
      <div>
        <div className={styles.sectionTitle}>
          <h1>ADVISORS</h1>
        </div>
        <div className={styles.peopleContainer}>
          {this.state.advisors.map(person => {
            return (
              <div
                key={person.name}
                ref={person.name}
                onClick={this.showAdvisorModal}
                id={person.name}
                ref={ref => {
                  this.myRef[person.name] = ref;
                  return true;
                }}
                className={`${person.showInfo ? styles.black : ""} ${
                  styles.personContainer
                }`}
              >
                <div className={styles.person}>
                  <div
                    className={
                      person.showInfo
                        ? styles.greenUpArrow
                        : styles.greenDownArrow
                    }
                  >
                    <img src={greenDownArrow} />
                  </div>
                  <div className={styles.name}>
                    <h5>{person.name}</h5>
                  </div>
                </div>
                <div
                  className={
                    person.isOffset
                      ? styles.reversePersonModal
                      : styles.personModal
                  }
                >
                  <img
                    className={
                      person.isOffset
                        ? styles.reverseBlackTriangle
                        : styles.blackTriangle
                    }
                    src={blackSmallTriangle}
                  />
                  <h4 className={styles.personModal_name}>{person.name}</h4>
                  <p>
                    President and COO of the Salt Lake Organizing Committee for
                    the 2002 Olympic Winter Games; Managing Director, Sorenson
                    Capital; Former Chairman and Board Member,
                    Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC.
                    Co-founder Travel Services International (NASDAQ:TRVL), and
                    Resortquest International (NYSE:RQI).
                  </p>
                </div>
                {person.showInfo ? (
                  <p className={styles.info}>{person.info}</p>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Advisors;
