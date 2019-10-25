import styles from "./Newsletter.modules.css";

class Newsletter extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h5 className={styles.tempTitle}>Sign up for our newsletter:</h5>
        </div>
        <form className={styles.inputContainer}>
          <input
            className={styles.newsletterInput}
            type="text"
            placeholder="Enter your email"
          />
          <button className={styles.subscribeBtn}>SUBSCRIBE</button>
        </form>
      </div>
    );
  }
}

export default Newsletter;
