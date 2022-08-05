import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="copyright">copyright &copy;2021</div>
      <div className="social-links">
        <a href="/#" className="social-icons">
          <i className="fab fa-facebook"></i>
        </a>

        <a href="/#" className="social-icons">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="/#" className="social-icons">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="/#" className="social-icons">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
