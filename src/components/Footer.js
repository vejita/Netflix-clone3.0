import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h3 className="footer__uppertext footer__items">
          Questions? <Link to="#">Contact us</Link>.
        </h3>
        <div className="footer__content">
          <div className="content-box content-box-1">
            <ul>
              <li className="footer__items">
                <Link to="#">FAQ</Link>
              </li>
              <li className="footer__items">
                <Link to="#">investor Relations</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Ways to watch</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Corporate Information</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Netflix Originals</Link>
              </li>
            </ul>
          </div>

          <div className="content-box content-box-2">
            <ul>
              <li className="footer__items">
                <Link to="#">Help Center</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Jobs</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Terms of Use</Link>W
              </li>
              <li className="footer__items">
                <Link to="#"> Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="content-box content-box-3">
            <ul>
              <li className="footer__items">
                <Link to="#">Account</Link>
              </li>
              <li className="footer__items">
                <Link to="#">REdeem Gift Cards</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Privacy</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Speed Test</Link>
              </li>
            </ul>
          </div>

          <div className="content-box content-box-4">
            <ul>
              <li className="footer__items">
                <Link to="#">Media Center</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Buy Gift Cards</Link>
              </li>
              <li className="footer__items">
                <Link to="#">Cookie preference's</Link>
              </li>
              <li className="footer__items">
                <Link to="#"> Legal Notices</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
