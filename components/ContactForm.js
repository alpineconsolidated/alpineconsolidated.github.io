import styles from "./ContactForm.modules.css";
import Button from "../components/Button";

class ContactForm extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  };

  handleResponse = (status, msg) => {
    if (status === 200) {
      this.setState({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
        email: "",
        message: "",
        phone: "",
        name: ""
      });
    } else {
      this.setState({
        info: { error: true, msg: msg }
      });
    }
  };

  handleOnChange = e => {
    e.persist();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = async e => {
    const inputs = {
      email: this.state.email,
      message: this.state.message,
      name: this.state.name,
      phone: this.state.phone
    };
    e.preventDefault();

    this.setState(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    this.handleResponse(res.status, text);
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={this.props.logo} />
          </div>
          <div className="column-grid">
            <div className="box-half">
              <div className={styles.textContainer}>
                <h1>CONTACT</h1>
                <p>
                  We’re here if you want to schedule a visit, or to tell us
                  about your business ideas.
                  <br />
                  <br />
                  You can also contact us at:
                  <br />
                  <span className={styles.highlight}>
                    contact@alpineconsolidated.com
                  </span>
                </p>
              </div>
            </div>
            <div className={`box-half`}>
              <form
                className={styles.formContainer}
                onSubmit={this.handleOnSubmit}
              >
                <label className={styles.label}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    placeholder="Name"
                    onChange={this.handleOnChange}
                    className={styles.field}
                  />
                </label>
                <label className={styles.label}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    placeholder="E-mail adress"
                    onChange={this.handleOnChange}
                    className={styles.field}
                  />
                </label>
                <label className={styles.label}>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                    placeholder="Phone no."
                    onChange={this.handleOnChange}
                    className={styles.field}
                  />
                </label>
                <label className={styles.label}>
                  <input
                    id="message"
                    name="message"
                    value={this.state.message}
                    placeholder="How can we help?"
                    onChange={this.handleOnChange}
                    className={styles.field}
                  />
                </label>

                <div>
                  <Button
                    onSubmit={this.handleOnSubmit}
                    text="CONTACT US"
                    contact
                  >
                    contact
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>
            Designed and developed by{" "}
            <span className={styles.highlight}>[e-spres-oh]</span>
          </p>
          <p>©Alpine Consolidated, 2019</p>
        </div>
      </>
    );
  }
}

export default ContactForm;
