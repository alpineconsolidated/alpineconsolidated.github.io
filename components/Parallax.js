import styles from "./Parallax.modules.css";

const Parallax = props => {
  return (
    <div className={styles.imageContainer}>
      <img className="responsive-image" src={props.image} />
    </div>
  );
};

export default Parallax;
