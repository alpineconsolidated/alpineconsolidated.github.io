import image from "../static/images/triangle3.png";
import styles from "./Testimonial.modules.css";

const Testimonial = () => {
  return (
    <div className="column-grid">
      <div className={`${styles.textBox} box-half`}>
        <div className={styles.imageContainer}>
          <img className="responsive-image" src={image} />
        </div>
      </div>
      <div className={`${styles.textBox} box-half`}>
        <div>
          <p className={styles.testimonialText}>
            “Alpine has been an amazing partner. They rolled up their sleeves
            and immediately started to help scale our company bringing new
            customers and a pipeline of new opportunities. They stepped into
            management roles when we need help and their capital and sales
            expertise were instrumental in retaining and attracting our highly
            skilled engineers who are excited by the influx of new projects.”
          </p>
          <h5>Daniel Markovits</h5>
          <p>
            Director of Engineering @ <strong>[e-spres-oh]</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
