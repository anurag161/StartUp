import React from "react";
import "./Feedback.css";
import { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here...
    // For this example, we'll just log the inputs.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Feedback:", feedback);
  };

  return (
    <div className="feedback">
      <h2>Customer Feedback</h2>
      <div className="feedback-form-container">
        <form className="feedback-form" onSubmit={handleSubmit}>
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
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="5"
            required
          />
          <button className="fd" type="submit">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
