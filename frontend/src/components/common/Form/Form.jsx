import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./form.css";

function Form({ handleSubmit }) {
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
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
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
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="form">
          <h2>Send a message</h2>
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your fullname"
            />
            {errors.fullname && touched.fullname ? (
              <div className="error__msg">{errors.fullname}</div>
            ) : (
              ""
            )}
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
            />
            {errors.email && touched.email ? (
              <div className="error__msg">{errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your phone number"
            />
            {errors.phone && touched.phone ? (
              <div className="error__msg">{errors.phone}</div>
            ) : (
              ""
            )}
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your address"
            />
            {errors.address && touched.address ? (
              <div className="error__msg">{errors.address}</div>
            ) : (
              ""
            )}
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              type="text"
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter message here..."
            />
            {errors.message && touched.message ? (
              <div className="error__msg">{errors.message}</div>
            ) : (
              ""
            )}
          </div>
          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
