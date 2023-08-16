import React, { useState } from "react";
import "./CustomerSupport.css";

const CustomerSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here...
    // For this example, we'll just log the inputs.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="support-form-container">
      <div className="support-form-content">
        <h2>Contact Customer Support</h2>
        <form className="support-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          />
          <button className="CS" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerSupport;
