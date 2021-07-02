import React from "react";

const Footer = () => {
  return (
    <div className="container bg-dark p-4">
      <div className="d-flex justify-content-center p-4">
        <img src="./images/logo-light.svg" />
      </div>
      <ul className="nav flex-column navbar">
        <li className="nav-item">
          <a className="nav-link active text-light" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            CONTACT ME
          </a>
        </li>
      </ul>
      <div id="social-icons" className="d-flex justify-content-center p-4">
        <img className="px-2" src="./images/icons/github.svg" />
        <img className="px-2" src="./images/icons/twitter.svg" />
        <img className="px-2" src="./images/icons/linkedin.svg" />
      </div>
    </div>
  );
};

export default Footer;
