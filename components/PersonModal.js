import styles from "./PersonModal.modules.css";
import close from "../static/images/close.svg";

const PersonModal = props => {
  console.log("person modal", props);
  return (
    <div className={styles.container}>
      <div onClick={props.hidePersonModal} className={styles.closeModalIcon}>
        <img src={close} />
      </div>
      <div>
        <div className={styles.path}>
          <img src={props.path} />
        </div>
        <div className={styles.personWrapper}>
          <div className={styles.image}>
            <img src={props.image}></img>
          </div>
          <div className={styles.content}>
            <h1 className={styles.name}>
              <span className="noWrap">{props.name}</span>
            </h1>
            <h3 className={styles.position}>{props.position}</h3>
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonModal;
