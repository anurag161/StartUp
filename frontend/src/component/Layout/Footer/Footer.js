import React from "react";
import "./Footer.css";
import ScrollUpButton from "../ScrollUpDown/ScrollUpButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ScrollUpButton />
      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <a href="/aboutUs">About Us</a>
        </div>
        <div className="footer-column">
          <h3>Connect with Us</h3>
          <a href="/contactUs">Contact Us</a>
          <a href="/support">Customer Support</a>
          <a href="/feedback">Feedback</a>
          <a href="/collaboration">Collaboration</a>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <a href="/terms&conditions">Terms and Conditions</a>
          <a href="/noRefund">No Refund Policy</a>
        </div>
        <div className="footer-social footer-column">
          <h3>Follow Us</h3>
          <a href="https://wa.me/6261718764">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} IITIAN_VIBES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
