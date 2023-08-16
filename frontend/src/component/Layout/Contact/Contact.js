import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const visitInstagramAnurag = () => {
  window.location = "https://instagram.com/anuragkumar.bh";
};

const visitInstagramArpit = () => {
  window.location = "https://instagram.com/arp.it2126";
};

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contactContainer">
        {/* Left card */}
        <div className="contactCard leftCard">
          <h3>Name: Anurag Kumar Bharti</h3>
          <p>Phone: +91 6261718764</p>
          <p>
            Email:{" "}
            <a className="mail" href="mailto:bharti.4@iitj.ac.in">
              bharti.4@iitj.ac.in
            </a>
          </p>
          <p>
            Instagram:{" "}
            <Button onClick={visitInstagramAnurag} color="primary">
              Visit Instagram
            </Button>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/anurag-bharti-502b44222/">
              Linked In
            </a>
          </p>
        </div>

        {/* Right card */}
        <div className="contactCard rightCard">
          <h3>Name: Arpit Arya</h3>
          <p>Phone: +91 7489467045</p>
          <p>
            Email:{" "}
            <a className="mail" href="mailto:arya.8@iitj.ac.in">
              arya.8@iitj.ac.in
            </a>
          </p>
          <p>
            Instagram:{" "}
            <Button onClick={visitInstagramArpit} color="primary">
              Visit Instagram
            </Button>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/arpit-arya-49325a230">
              Linked In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
