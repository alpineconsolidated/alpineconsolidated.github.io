import styles from "./Parallax.modules.css";

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
