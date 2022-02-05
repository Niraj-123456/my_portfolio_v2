import React from "react";

function Contact() {
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
        </div>
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
