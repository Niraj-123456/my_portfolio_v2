import React from "react";

function Contact() {
  return (
    <main className="home-wrapper">
      <div className="contact">
        <div className="content">Let's get in touch</div>
        <div className="contact-form">
          <form action="#">
            <h2>Send a message</h2>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" id="fullname" />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="message">Message</label>
            <textarea rows="5" type="text" name="message" id="message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
