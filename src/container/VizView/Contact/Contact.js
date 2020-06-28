import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

const contact = () => {
  return (
    <div className="contact">
      <h2>Talk with Us</h2>
      <p className="contact-intro">If you are interested in talking to us about the projects, having anything you would like to see in the projects, please send us a message or email <a>vizview@gmail.com</a>.</p>
      <div className="contact-info">
        <input
          id="contact-name"
          type="text"
          placeholder="Name"
          aria-label="Name"
        ></input>
        <input
        id="contact-email"
          type="email"
          placeholder="Email"
          aria-label="Email"
        ></input>
        <textarea
        placeholder="Tell us what's on your mind..."
        ></textarea>
        <input type="submit" value="Send" id="submit"></input>
      </div>
      
    </div>
  );
};

export default contact;
