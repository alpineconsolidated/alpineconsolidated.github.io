import styles from "./PersonCard.modules.css";

const PersonCard = props => {
  return (
    <div className={styles.container}>
      <img src={props.image}></img>
      <h2 className={styles.name}>{props.name}</h2>
      <h5 className={styles.position}>{props.position}</h5>
      <p className={styles.description}>{props.description}</p>
      <button className={styles.readMoreBtn}>READ MORE</button>
    </div>
  );
};

export default PersonCard;
