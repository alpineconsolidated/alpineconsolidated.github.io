import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import Button from "../components/Button";

import styles from "./ContactForm.module.css";

const ContactForm = ({
  status,
  errors,
  touched,
  isSubmitting,
  logo,
  route
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div style={{ position: "relative" }} className="column-grid">
          <div className="box-half">
            <span
              style={{ position: "absolute", top: "-11rem" }}
              id="contact"
            ></span>
            <div className={styles.textContainer}>
              <h1>CONTACT</h1>
              <p>
                We’re here if you want to schedule a visit, or to tell us about
                your business ideas.
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
            <Form className={styles.formContainer}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={styles.field}
              />
              <div className={styles.errorContainer}>
                <div className={styles.underline}></div>
                {touched.name && errors.name && (
                  <p className={styles.errorMessage}>{errors.name}</p>
                )}
              </div>

              <Field
                type="email"
                name="email"
                placeholder="E-mail adress"
                className={styles.field}
              />
              <div className={styles.errorContainer}>
                <div className={styles.underline}></div>
                {touched.email && errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>

              <Field
                type="text"
                name="phone"
                placeholder="Phone no."
                className={styles.field}
              />
              <div className={styles.underline}></div>

              <Field
                type="text"
                name="message"
                placeholder="How can we help?"
                className={styles.field}
              />
              <div className={styles.errorContainer}>
                <div className={styles.underline}></div>
                {touched.message && errors.message && (
                  <p className={styles.errorMessage}>{errors.message}</p>
                )}
              </div>
              {isSubmitting ? (
                <div>
                  <p>Submitting...</p>
                </div>
              ) : status.success ? (
                <h3 className={styles.successMessage}>{status.msg}</h3>
              ) : (
                <div className={styles.contactBtnContainer}>
                  <Button type="submit" text="CONTACT US" contact>
                    contact
                  </Button>
                  {!isSubmitting && !status.success && <p>{status.msg}</p>}
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Designed and developed by{" "}
          <a
            style={{ cursor: "pointer" }}
            href="https://www.e-spres-oh.com"
            target="_blank"
          >
            <span className={styles.highlight}>[e-spres-oh]</span>
          </a>
        </p>
        <p>&copy; Alpine Consolidated {`${new Date().getFullYear()}`}</p>
      </div>
    </>
  );
};

export default withFormik({
  mapPropsToValues({ name, email, phone, message, msg }) {
    return {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  },
  mapPropsToStatus({ msg }) {
    return {
      success: false,
      msg: ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .strict()
      .ensure("ensure"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required")
      .strict()
      .ensure("ensure")
      .trim("trim"),
    message: Yup.string()
      .required("Enter your message")
      .strict()
      .ensure("ensure")
  }),
  async handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    emailjs.send("service_aux9q8h", "contactform", values, "7JhZZoK59ZPor12pY")
      .then((result) => {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true, msg: "Message sent successfully." });
      }, (error) => {
        setSubmitting(false);
        setStatus({ msg: error.text });
      });
  }
})(ContactForm);
