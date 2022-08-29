import styles from "./Parallax.module.css";

const Parallax = props => {
  return (
    <div
      className={props.image.id === "1" ? styles.smallImage : styles.bigImage}
    >
      <img className="responsive-image" src={props.image.url} />
    </div>
  );
};

export default Parallax;
