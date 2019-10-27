import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axios from "axios";

import styles from "./Newsletter.modules.css";

const Newsletter = ({ status, errors, touched, isSubmitting }) => {
  return (
    <div>
      {isSubmitting ? (
        <p>Sending...</p>
      ) : status.success ? (
        <h3>{status.submitMessage}</h3>
      ) : (
        <>
          <div>
            <h5 className={styles.tempTitle}>Sign up for our newsletter:</h5>
          </div>
          <Form className={styles.inputContainer}>
            <div>
              <Field
                className={styles.newsletterInput}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <div className={styles.errorContainer}>
                <div className={styles.underline}></div>
                {touched.email && errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>
            </div>
            <div className={styles.contactBtnContainer}>
              <button type="submit" className={styles.subscribeBtn}>
                SUBSCRIBE
              </button>
              {!isSubmitting && !status.success && <p>{status.msg}</p>}
            </div>
            <p>{status.submitMessage}</p>
          </Form>
        </>
      )}
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
      submitMessage: "",
      success: false
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
        submitMessage: "Your email has been successfully subscribed!",
        success: true
      });
    } else {
      setSubmitting(false);
      setStatus({ submitMessage: "Something went wrong, please try again!" });
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required")
      .strict()
      .ensure("ensure")
      .trim("trim")
  })
})(Newsletter);
