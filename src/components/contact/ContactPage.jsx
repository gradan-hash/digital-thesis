import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      subject,
      message,
    });
  };

  return (
    <div className="contact-page">
      <h1>Direct Message</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message"
            required
          />
        </div>

        <button type="submit" className="send-button">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
