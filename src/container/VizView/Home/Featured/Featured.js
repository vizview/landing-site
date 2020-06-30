import React from "react";
import "./Featured.css";

const featured = () => {
  return (
    <div className="featured">
      <h2>Featured Projects</h2>
      <div className="subscribe">
        <p>Subscribe our mailing list to view the most updated projects!</p>
        <div className="sub-input">
        <input
          id="contact-email"
          type="email"
          placeholder="Email"
          aria-label="Email"
        ></input>
        <input type="submit" value="Subscribe" id="subsribe"></input>
        </div>
       
      </div>
    </div>
  );
};

export default featured;
