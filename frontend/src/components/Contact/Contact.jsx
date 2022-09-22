import React from "react";
import "./contact.css";

import Form from "../common/Form/Form";

function Contact() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="left-content">
          <h1>Let's get in touch</h1>
          <p>
            Hi there! What's up? If you are looking for a React js intern and if
            you like my work, please feel free to contact me via the form on the
            right. I would be happy to get in touch with you. Thank you!
          </p>
          <img src="images/contact_bg.jpg" alt="Get In Touch" />
        </div>
        <div className="contact-form">
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
