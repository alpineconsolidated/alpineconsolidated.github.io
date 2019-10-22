import styles from "./Map.modules.css";

import map from "../static/images/map.svg";
import location from "../static/images/location.svg";
import locationGreen from "../static/images/locationGreen.svg";

const Map = () => {
  return (
    <div className="column-grid">
      <div className={`${styles.columnLeft} box-third`}>
        <div className={styles.title}>
          <h1>WHERE</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.address}>
            <img src={location}></img>
            <p>
              <span className={styles.locationText}>Headquered in</span> <br />
              <span className={styles.highlight}>Washington DC</span>
            </p>
          </div>
          <div className={styles.address}>
            <img src={location}></img>
            <p>
              <span className={styles.locationText}>Offices in</span> <br />
              <span className={styles.highlight}>Chicago</span>
            </p>
          </div>
          <div className={styles.address}>
            <img src={locationGreen}></img>
            <p>
              <span className={styles.locationText}>Investments</span> <br />
              <span className={styles.highlight}>Globally</span>
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.columnRight} box-two-thirds`}>
        <div className={styles.mapContainer}>
          <img className="responsive-image" src={map} />
        </div>
      </div>
    </div>
  );
};

export default Map;
