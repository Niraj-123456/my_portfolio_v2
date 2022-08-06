import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <p className="copyright">copyright &copy;2021</p>
      <div className="footer-social-links">
        <FontAwesomeIcon icon={faFacebook} className="footer-social-icon" />

        <FontAwesomeIcon icon={faInstagram} className="footer-social-icon" />

        <FontAwesomeIcon icon={faTwitter} className="footer-social-icon" />

        <FontAwesomeIcon icon={faGithub} className="footer-social-icon" />
      </div>
    </div>
  );
}

export default Footer;
