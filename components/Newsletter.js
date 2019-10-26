import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axios from "axios";

import styles from "./Newsletter.modules.css";

const Newsletter = ({ status, touched, isSubmitting }) => {
  return (
    <div>
      <div>
        <h5 className={styles.tempTitle}>Sign up for our newsletter:</h5>
      </div>
      <Form className={styles.inputContainer}>
        <Field
          className={styles.newsletterInput}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button type="submit" className={styles.subscribeBtn}>
          SUBSCRIBE
        </button>
        <p>{status.submitMessage}</p>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ email, submitMessage }) {
    return {
      email: ""
    };
  },
  mapPropsToStatus({ submitMessage }) {
    return {
      submitMessage: ""
    };
  },
  async handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    const res = await axios.post("./api/subscribeToNewsletter", {
      email: values.email
    });
    if (res.data.success) {
      setSubmitting(false);
      resetForm();
      setStatus({
        submitMessage: "Your email has been successfully subscribed!"
      });
    } else {
      setSubmitting(false);
      setStatus({ submitMessage: "Something went wrong, please try again!" });
    }
  }
})(Newsletter);
