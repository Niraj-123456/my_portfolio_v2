import React, { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out to me.");
  };
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
          <form onSubmit={handleSubmit}>
            <h2>Send a message</h2>
            <label htmlFor="fullname">Full Name</label>
            <input
              required
              type="text"
              name="fullname"
              id="fullname"
              value={contact.fullname}
              onChange={handleChange}
            />
            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              required
              type="text"
              name="phone"
              id="phone"
              value={contact.phone}
              onChange={handleChange}
            />
            <label htmlFor="address">Address</label>
            <input
              required
              type="text"
              name="address"
              id="address"
              value={contact.address}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              type="text"
              name="message"
              id="message"
              value={contact.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
