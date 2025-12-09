import React from "react";
import Image from "next/image";
import image from "../static/images/triangle3.png";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className="column-grid">
      <div className={`${styles.textBox} box-half`}>
        <div className={styles.imageContainer}>
          <Image className="responsive-image" src={image} />
        </div>
      </div>
      <div className={`${styles.textBox} box-half`}>
        <div>
          <p className={styles.testimonialText}>
            “Alpine has been an amazing partner. They rolled up their sleeves
            and immediately started to help scale our company bringing new
            customers and a pipeline of new opportunities. They stepped into
            management roles when we needed help, and their capital and sales
            expertise were instrumental in retaining and attracting our highly
            skilled engineers who are excited by the influx of new projects.”
          </p>
          <h5>Daniel Markovits</h5>
          <p>
            Director of Engineering @{" "}
            <a href="https://www.e-spres-oh.com" target="_blank">
              <span className={styles.companyName}>[e-spres-oh]</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
