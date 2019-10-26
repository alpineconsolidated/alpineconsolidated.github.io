import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "../components/Button";
import Newsletter from "./Newsletter";

import styles from "./ContactForm.modules.css";

const ContactForm = ({ values, errors, touched, isSubmitting, logo }) => {
  console.log(values);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className="column-grid">
          <div className="box-half">
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
            <div className="hideOnSmallTablet">
              <Newsletter />
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
              {isSubmitting && values.msg === "" ? (
                <div>
                  <p>Submitting...</p>
                </div>
              ) : (
                <div className={styles.contactBtnContainer}>
                  <Button type="submit" text="CONTACT US" contact>
                    contact
                  </Button>
                </div>
              )}
              <div>{values.msg}</div>
              <div>{errors.msg}</div>
            </Form>
            <div className={`${styles.newsletterContainer} showOnSmallTablet`}>
              <Newsletter />
            </div>
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
  async handleSubmit(
    values,
    { resetForm, setErrors, setSubmitting, setValues }
  ) {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const response = await res.json();

    if (res.status === 200) {
      setSubmitting(false);
      setTimeout(() => {
        setValues({ ...values, msg: response.msg });
      }, 100);
      resetForm();
    } else {
      setSubmitting(false);
      setErrors({ msg: response.msg });
    }
  }
})(ContactForm);

// state = {
//   name: "",
//   phone: "",
//   email: "",
//   message: "",
//   submitted: false,
//   submitting: false,
//   info: {
//     error: false,
//     msg: null
//   }
// };

// handleResponse = (status, msg) => {
//   if (status === 200) {
//     this.setState({
//       submitted: true,
//       submitting: false,
//       info: { error: false, msg: msg },
//       email: "",
//       message: "",
//       phone: "",
//       name: ""
//     });
//   } else {
//     this.setState({
//       info: { error: true, msg: msg }
//     });
//   }
// };

// handleOnChange = e => {
//   e.persist();
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };

// handleOnSubmit = async e => {
//   const inputs = {
//     email: this.state.email,
//     message: this.state.message,
//     name: this.state.name,
//     phone: this.state.phone
//   };
//   e.preventDefault();

//   this.setState(prevStatus => ({ ...prevStatus, submitting: true }));
//   const res = await fetch("/api/sendEmail", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(inputs)
//   });
//   const text = await res.text();
//   this.handleResponse(res.status, text);
// };
