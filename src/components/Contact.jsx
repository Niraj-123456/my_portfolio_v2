import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function Contact() {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const contactFormValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("Your Full Name is required!"),
    email: Yup.string()
      .email("Invalid email address!")
      .required("Your Email is required!"),
    phone: Yup.string().required("Your Phone Number is required!"),
    address: Yup.string().required("Your address is required!"),
    message: Yup.string().required("Please enter your message!"),
  });

  return (
    <main className="home-wrapper">
      <div className="contact">
        <div className="content">
          <h1>Let's get in touch</h1>
          <p>
            Hi there! What's up? If you are looking for a React js intern and if
            you like my work, please feel free to contact me via the form on the
            right. I would be happy to get in touch with you. Thank you!
          </p>
          <img src="images/contact_bg.jpg" alt="Get In Touch" />
        </div>
        <div className="contact-form">
          <Formik
            initialValues={initialValues}
            validationSchema={contactFormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              dirty,
              values,
              errors,
              touched,
              isSubmitting,
              isValid,
              handleChange,
              handleBlur,
            }) => (
              <Form className="form">
                <h2>Send a message</h2>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullname && touched.fullname ? (
                  <div className="error__msg">{errors.fullname}</div>
                ) : (
                  ""
                )}
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <div className="error__msg">{errors.email}</div>
                ) : (
                  ""
                )}
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? (
                  <div className="error__msg">{errors.phone}</div>
                ) : (
                  ""
                )}
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address ? (
                  <div className="error__msg">{errors.address}</div>
                ) : (
                  ""
                )}
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  type="text"
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message ? (
                  <div className="error__msg">{errors.message}</div>
                ) : (
                  ""
                )}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid || !dirty}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}

export default Contact;
