import styles from "./PersonCard.modules.css";
import path from "../static/images/path.svg";

const PersonCard = props => {
  return (
    <div className={styles.container}>
      <div
        style={{ left: `${props.person.pathOffset}` }}
        className={styles.path}
      >
        <div>
          <img src={path} />
        </div>
      </div>
      <img
        onClick={() => props.showPersonModal(props.person)}
        className={styles.image}
        src={props.person.image}
      ></img>
      <h2
        onClick={() => props.showPersonModal(props.person)}
        className={styles.name}
      >
        {props.person.name}
      </h2>
      <h5 className={styles.position}>{props.person.position}</h5>
      <p className={styles.description}>{props.person.description}</p>
      <button
        onClick={() => props.showPersonModal(props.person)}
        className={styles.readMoreBtn}
      >
        READ MORE
      </button>
    </div>
  );
};

export default PersonCard;
