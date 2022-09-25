import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div className="notfound__container">
      <div className="notfound__content">
        <h1>404 Page Not Found</h1>
        <p>The page you are looking for doesn't exist. Please check the url.</p>
      </div>
    </div>
  );
}

export default NotFound;
