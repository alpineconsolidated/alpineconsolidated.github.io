import axios from "axios";

import styles from "./Newsletter.modules.css";

class Newsletter extends React.Component {
  state = {
    email: "",
    submitMessage: ""
  };

  handleOnChange = e => {
    this.setState({ email: e.target.value });
  };

  handleOnSubmit = async e => {
    e.preventDefault();

    const data = { email: this.state.email };
    const res = await axios.post("./api/subscribeToNewsletter", data);

    res.data.success
      ? this.setState({ email: "", submitMessage: "success" })
      : this.setState({ submitMessage: "fail" });
  };

  render() {
    return (
      <div>
        <div>
          <h5 className={styles.tempTitle}>Sign up for our newsletter:</h5>
        </div>
        <form onSubmit={this.handleOnSubmit} className={styles.inputContainer}>
          <input
            className={styles.newsletterInput}
            type="email"
            value={this.state.email}
            placeholder="Enter your email"
            onChange={this.handleOnChange}
          />
          <button onClick={this.handleOnSubmit} className={styles.subscribeBtn}>
            SUBSCRIBE
          </button>
        </form>
      </div>
    );
  }
}

export default Newsletter;
