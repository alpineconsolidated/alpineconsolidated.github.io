import { throttle } from "lodash-es";

import styles from "./Advisors.modules.css";
import greenDownArrow from "../static/images/greenDownArrow.svg";
import blackSmallTriangle from "../static/images/blackSmallTriangle.svg";
import close from "../static/images/close.svg";

const advisors = [
  {
    name: "ADAM MCGOWAN",
    info:
      "Director of Business Strategy and Development at CISCO, a former VP of Investment banking at McNamee Lawrence and Sr. Manager at Cap Gemini. His sweet spot is the intersection of strategy, finance, and technology.  His diverse career includes investment banking, corporate finance, corporate strategy, and strategy consulting. Adam has helped numerous senior management teams and boards of directors with their corporate growth strategies.  Adam received an MBA from Yale, a Master’s of Engineering from MIT and a BS from Virginia Tech."
  },
  {
    name: "ALAN MELTZER",
    info:
      "Founded The Meltzer Group in 1982 as a single insurance agent and has since grown the company to one with over 200 dedicated employees across five divisions. Alan was inducted into the Washington Business Hall of Fame in 2011, the same year The Gazette newspapers named him one of the “25 CEOs You Need to Know.”. As one of the top corporate philanthropists in the Washington metropolitan area, Alan has served on the Board of Directors for numerous organizations, including Juvenile Diabetes Research Foundation, Wolf Trap Foundation, For Love of Children, United Jewish Endowment Fund, Junior Achievement, K. Neal International Trucks, Jewish Federation Executive Committee and the Washington Hospital Center Foundation."
  },
  {
    name: "CHRISTOPHER ENSLEY",
    info:
      "Managing Director of technology, media & telecom (TMT) investment banking at Noble Financial Capital Markets. While on Wall Street, Mr. Ensley has participated in over $16B in transactions. Prior to Noble, Mr. Ensley was a banker at Coady Diemar Partners, a boutique investment bank in NYC, a Managing Director in equity research at Bear Stearns, a Vice President of equity research at Lazard and began his Wall Street career in equity research at Salomon. He received an MBA from Vanderbilt University and a BA from the College of William & Mary."
  },
  {
    name: "DAN O’MALLEY",
    info:
      "Dan O’Malley is currently President and Chief Operating Officer of Kynect and recently held the same position at Stream Energy which was sold for $300M to NRG on August 1, 2019. Over the course of 3 years, Dan was instrumental in redeveloping the business at Stream and introducing new digital products and services and expanding geographically to new markets. Separately, Dan is an innovator and well-known expert in Fintech and International Remittances. He was President and Executive Vice President of the Americas and Emerging Markets at MoneyGram International for 24 years before leaving the company in 2012. Dan has helped many companies determine their strategic direction and unlock value for stakeholders. Dan currently is an independent director on the board of two privately held financial services companies and participates at various levels with several start-up and mid-stage growth companies as an investor and advisor."
  },
  {
    name: "DANTE DESPARTES",
    info:
      "Dante Disparte is the founder and CEO of Risk Cooperative, an innovative global strategy, risk advisory, and insurance brokerage based in Washington, D.C. He is the co-author of the book “Global Risk Agility and Decision Making” and was recently selected as one of the 40 leaders under 40 by the Washington Business Journal and among the top 100 most influential leaders in D.C., in the inaugural Powermeter 100 list. Prior to forming Risk Cooperative, Mr. Disparte served as the managing director of Clements Worldwide, a leading insurance brokerage with customers in more than 170 countries. Mr. Disparte is a specialist in strategy and risk reduction through the design and delivery of comprehensive risk solutions of worldwide scope. Mr. Disparte serves as the chair of the board of the Harvard Business School Club of Washington, D.C., and is a former member of Harvard Business School’s global alumni board. He is the founder and chair of the Business Council for American Security and a board member of the American Security Project. He is a member of the Bretton Woods II Council with New America and on the board of trustees of Gamma Iota Sigma, the preeminent organization dedicated to promoting, encouraging, and sustaining student interest in insurance, risk management, and actuarial science as professions."
  },
  {
    name: "FRASER BULLOCK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ: OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ: TRVL), and Resortquest International (NYSE: RQI)."
  },
  {
    name: "FRED MALEK, JR",
    info:
      "Fred is a Washington-based entrepreneur in the lodging and hospitality industry, CEO of Hospitality Benefits, and a Managing Partner of District Hospitality Partners. Prior to District, Fred was the CEO of TIG Global until its sale to Micros Systems, the largest technology provider in the hospitality and restaurant space. He was the co-founder and director of Hubs1, a China-based hotel reservation system. Fred served in the military in the US Navy Special Forces, holds a BS from the US Naval Academy and an MBA from the Wharton School at U Penn."
  },
  {
    name: "HASAN DOSSAL",
    info:
      "Hasan has been a senior executive in the telecom industry-leading strategy, product development, pricing, data, and operations management for more than two decades. In the past 15 years, he's held a senior position at Verizon, Verizon Wireless in the US, and Rogers Communications in Canada. Prior to that, he had management positions at KPMG and MCI. He is currently the CEO of HDBUILDS, an innovative real estate development company that uniquely combines a scientific approach to identifying properties suitable for rehabilitation in Washington, DC. He is a graduate of the University of Virginia's Darden School of Management with an MS in Strategy and Finance and its Engineering School with an MS in Electrical Engineering, and the University of Notre Dame where he earned his BS in Electrical Engineering."
  },

  {
    name: "JAN ROSENBERG",
    info:
      "Jan is the CEO and founder of Datatility, a leading provider of cloud-based computing in the Washington area. An experienced entrepreneur, Jan has founded, grown, managed and transitioned businesses in diverse verticals. He was President of HRE Inc., a commercial mechanical services contractor in Washington D.C.through its sale to an NYSE company, and an investment banker at the McLean Group, focusing on mergers, acquisitions, and capital formation. In 2000, he was a founding partner and CEO of Zenetex, a leading federal government logistics and IT contractor. Jan was a co-founder of Marlin Financial Services in the UK which was sold to Duke Street Capital, a leading UK private equity firm."
  },
  {
    name: "JOHN MEYER",
    info:
      "Managing Director of Government Matters Media, part of the Sinclair Broadcast Group. Before that, John was the Director of Digital Media for WTOP, Washington’s #1 performing all-news network. He is a revenue-focused media professional with over 20 years of experience building profitable brands across digital, television, radio, and social media. He is a proven strategic thinker in all matters related to digital brand development and marketing."
  },
  {
    name: "JONATHAN AKERS",
    info:
      "Jonathan Akers is the founder and former CEO of Lithium Cycles, an Orange County, California-based e-bike manufacturer which produces and distributes electric bicycles globally. At Lithium Cycles, he led the company to design its first iteration of award-winning electric bicycles before exiting. Jonathan has designed and developed over two dozens products ranging from B2B software to consumer electronics and raised over $1 million in funding on crowdfunding platforms including Kickstarter. He has degrees in Finance and in Engineering from Lehigh University where he served as faculty in the Mechanical Engineering Department teaching Integrated Product Development before relocating to D.C. Jon Akers currently works with a number of early-stage startups in the D.C. area."
  },
  {
    name: "JOSEPH VITTORIA",
    info:
      "Former Chairman and CEO of Avis (NYSE: CAR) Inc. Board Member, United Airlines, (NASDAQ: UAL). Chairman and CEO of Puradyn Filtration (NYSE: PFTI), and past Chairman of Great Wolf Resorts (NYSE: WOLF), Resortquest (NYSE: RQI), and Travel Services International (NASDAQ: TRVL)."
  },
  {
    name: "KATHY KEMPER",
    info:
      "CEO of the Institute for Education in Washington, DC, which promotes leadership and civility locally, nationally, and in the world community. Kathy is Washington’s “Grande Dame,” providing high-level forums for technology entrepreneurs to access know-how, mentoring, and growth resources."
  },
  {
    name: "MIKE BROOKS",
    info:
      "As SVP of Revenue At WeatherBug, Mike manages the business side of the global media company. Mike advises companies in the areas of mobile application advertising, attribution, monetization, and distribution. Prior to joining WeatherBug, Mike was the Global Director of App Advertising at AOL/Verizon/Oath and managed their mobile programmatic demand business and was responsible for Verizon mobile app distribution partnerships. Mike earned a Master’s degree in Applied Economics from Johns Hopkins University."
  },
  {
    name: "MIKE RAVENSCROFT",
    info:
      "Mike manages the day-to-day operations of the PeaceTech Accelerator in Washington, D.C. and oversees C5 Accelerate’s domestic investment portfolio. Prior to joining C5, Mike was Director of the MACH37 Cyber Accelerator and was on the Investment Team at CIT GAP Funds, a non-profit venture capital fund in Herndon, VA. While at CIT, Mike helped launch the EMERGE Accelerator on behalf of the Department of Homeland Security (DHS) Science and Technology Directorate (S&T) and Smart City Works, an accelerator for early-stage startups developing technology for the built environment. Mike began his career as a Research Associate at The Advisory Board Company in Washington, D.C. He holds a BA from the University of Michigan and an MA from American University."
  },
  {
    name: "SAMMI LEIBOVITZ DECHIARO",
    info:
      "Sammi has spent the past ten plus years building brands in the tech/media space, specializing in creative, strategy and user experience both on and offline. Sammi served as Vice President and Creative Director at AOL successfully launching and running several brands in the AOL portfolio. At AOL, Sammi was a founding member and head of MAKERS, the largest collection of women’s stories ever assembled and named by Forbes as one of the 'best websites for women.' Sammi now runs her own brand consultancy and has launched new platforms and experiences for a range of companies and individuals."
  },
  {
    name: "WAYNE RUSCH GARCHIK",
    info:
      "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  },
  {
    name: "STEVEN GARCHIK",
    info:
      "CEO of SJM Partners, Steve is one of the most successful real estate developers in the US for 32 years. In that time, he and his partners at The Evans Company of McLean, Virginia and subsequently at SJM Partners Inc. of Potomac, Maryland have developed approximately 4,000,000 sq ft of office space, 2,000,000 sq ft of residential properties, 3,000,000 sq ft of self-storage projects, 1,000,000 sq ft of retail space and 500,000 sq ft of industrial product."
  },
  {
    name: "RICARDO ERNST",
    info:
      "Baratta Chair in Global Business and Professor of Global Logistics and the former Deputy Dean of the McDonough School of Business, Georgetown University. Weekly Editorial Commentator, CNN Spanish."
  },
  {
    name: "RON HOWARD",
    info:
      "CEO of Washington-based Mercury Analytics, a leading online analytics company. Ron is an experienced technology industry entrepreneur. Mr. Howard has been the Founder, President, and CEO of public and private high-tech companies, including Hayes, the world’s first modem communications company, as well as SpeakOut.com, an Internet-based social and Internet-based social media and research organization that developed breakthrough Internet survey technologies. Mr. Howard has a history of hands-on corporate leadership as employee #1 and has served as chief executive of multi-hundred million dollar public and private companies."
  },
  {
    name: "WAYNE RUSCH",
    info:
      "Former Managing Partner, Washington-based Berliner, and Corcoran. Wayne specializes in international, export control and economic sanctions law. and has advised clients on institutional integrity investigations conducted by the World Bank. A graduate of the University of Wisconsin, he served as District Attorney for Iowa County for three years, was appointed counsel to the Asian Development Bank in Manila, The Philippines and has practiced in Washington, DC since 1980."
  },
  {
    name: "WILLIAM B. ALSUP III",
    info:
      "William, 'Bill', Alsup is the Senior Managing Director and Founding Partner of the Hines Washington office. He was the senior officer responsible for the development of City Center, the 1.5 million square feet mixed-use project in the heart of Washington, DC. He has served in a leadership role in the DC Building Industry Association as its president and is a member of the Boards of Directors of the DC Chamber of Commerce, DC Public Library Foundation and the DC Policy Center. He is a recipient of the Urban Land Institute's Lifetime Achievement Award for development and leadership in the Washington, DC area."
  }

  // {
  //   name: "KIM SCHAEFFER",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },
  // {
  //   name: "IMAD KHALIDI",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },
  // {
  //   name: "JEFFREY POLLACK",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },
  // {
  //   name: "ROBERT KRASNE",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },

  // {
  //   name: "JOSH LOWENTHAL",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },

  // {
  //   name: "PATRICK KENNEDY",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },

  // {
  //   name: "PAUL ZEVNIK",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },

  // {
  //   name: "SIMON MARKS",
  //   info:
  //     "President and COO of the Salt Lake Organizing Committee for the 2002 Olympic Winter Games; Managing Director, Sorenson Capital; Former Chairman and Board Member, Omniture,(NASDAQ:OMTR). Co-founder Alpine Consolidated, LLC. Co-founder Travel Services International (NASDAQ:TRVL), and Resortquest International (NYSE:RQI)."
  // },
];

class Advisors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advisors: advisors,
      pageWidth: "",
      container_yCoordinate: ""
    };
    this.myRef = [];
    this.personModalRefs = [];
    this.peopleContainer = React.createRef();
    this.sectionRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("resize", this.getPageInnerWidth);
    window.addEventListener("resize", this.updateAdvisorCoordinates);
    window.addEventListener("scroll", this.updateAdvisorCoordinates);

    this.getPageInnerWidth();
    this.updateAdvisorCoordinates();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getPageInnerWidth);
    window.removeEventListener("resize", this.updateAdvisorCoordinates);
    window.removeEventListener("scroll", this.updateAdvisorCoordinates);
  }

  getPageInnerWidth = throttle(() => {
    this.setState({ pageWidth: window.innerWidth });
  }, 100);

  updateAdvisorCoordinates = throttle(() => {
    const advisors = this.state.advisors.map(advisor => {
      if (
        this.personModalRefs[advisor.name].getBoundingClientRect().height +
          this.myRef[advisor.name].getBoundingClientRect().y +
          this.myRef[advisor.name].getBoundingClientRect().height +
          40 <
        window.innerHeight
      ) {
        return {
          name: advisor.name,
          info: advisor.info,
          isOffset: false,
          yCoordinate: this.myRef[advisor.name].getBoundingClientRect().y,
          advisorNameHeight: this.myRef[advisor.name].getBoundingClientRect()
            .height,
          modalHeight: this.personModalRefs[
            advisor.name
          ].getBoundingClientRect().height
        };
      } else
        return {
          name: advisor.name,
          info: advisor.info,
          isOffset: true,
          yCoordinate: this.myRef[advisor.name].getBoundingClientRect().y,
          advisorNameHeight: this.myRef[advisor.name].getBoundingClientRect()
            .height,
          modalHeight: this.personModalRefs[
            advisor.name
          ].getBoundingClientRect().height
        };
    });

    this.setState({
      advisors,
      container_yCoordinate: this.peopleContainer.current.getBoundingClientRect()
        .y
    });
  }, 100);

  showAdvisorModal = e => {
    if (this.state.pageWidth <= 1024) {
      const newAdvisors = this.state.advisors.map(advisor => {
        if (advisor.name === e.target.id) {
          return {
            ...advisor,
            showInfo: advisor.showInfo ? false : true
          };
        }
        return {
          ...advisor,
          showInfo: false
        };
      });

      this.setState({ advisors: newAdvisors });
    }
  };

  render() {
    return (
      <div ref={this.sectionRef}>
        <div className={styles.sectionTitle}>
          <h1>ADVISORS</h1>
        </div>
        <div ref={this.peopleContainer} className={styles.peopleContainer}>
          {this.state.advisors.map(person => {
            const top =
              person.yCoordinate -
              this.state.container_yCoordinate +
              person.advisorNameHeight +
              44;

            const reverseTop =
              person.yCoordinate -
              this.state.container_yCoordinate -
              person.advisorNameHeight -
              person.modalHeight;
            10;

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
                  <img
                    className={
                      person.isOffset
                        ? styles.reverseBlackTriangle
                        : styles.blackTriangle
                    }
                    src={blackSmallTriangle}
                  />
                </div>
                {person.showInfo ? (
                  <p className={styles.info}>{person.info}</p>
                ) : (
                  ""
                )}

                <div
                  style={{
                    top: `${person.isOffset ? reverseTop : top}px`
                  }}
                  ref={ref => {
                    this.personModalRefs[person.name] = ref;
                    return true;
                  }}
                  className={styles.personModal}
                >
                  <h4 className={styles.personModal_name}>{person.name}</h4>
                  <p>{person.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Advisors;

{
  /* {person.showInfo && (
                  <div
                    className={
                      person.isOffset
                        ? styles.infoTabletReverse
                        : styles.infoTablet
                    }
                  >
                    {" "}
                    <img
                      className={
                        person.isOffset
                          ? styles.reverseBlackTriangle
                          : styles.blackTriangle
                      }
                      src={blackSmallTriangle}
                    />
                    <h4 className={styles.infoTablet_name}>{person.name}</h4>
                    <p>{person.info}</p>
                  </div>
                )} */
}
