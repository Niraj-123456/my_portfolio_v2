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
        <a href="/#">
          <FontAwesomeIcon
            icon={faFacebook}
            className="footer-social-link-item"
          />
        </a>

        <a href="/#">
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer-social-link-item"
          />
        </a>

        <a href="/#">
          <FontAwesomeIcon
            icon={faTwitter}
            className="footer-social-link-item"
          />
        </a>

        <a href="/#">
          <FontAwesomeIcon
            icon={faGithub}
            className="footer-social-link-item"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
