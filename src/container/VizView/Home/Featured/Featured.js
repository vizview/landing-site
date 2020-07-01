import React from "react";
import "./Featured.css";
import cereal from "../../img/thumbnails/cereal.png"
const featured = () => {
  return (
    <div className="featured">
      <h2>Featured Projects</h2>
      <div className="projects-sum">
        
        <div className="project-intro">
        <img src={cereal}/>
        <h3>What’s in your cereal?</h3>
        <p>Come discover what is actually in your cereal. Play with cereal data!</p>
        </div>
        <div className="project-intro">
        <img src={cereal}/>
        <h3>What’s in your cereal?</h3>
        <p>Come discover what is actually in your cereal. Play with cereal data!</p>
        </div>
        <div className="project-intro">
        <img src={cereal}/>
        <h3>What’s in your cereal?</h3>
        <p>Come discover what is actually in your cereal. Play with cereal data!</p>
        </div>
        
        
      </div>
      <div className="subscribe">
        <p>Subscribe our mailing list to view the most updated projects!</p>
        <div className="sub-input">
        <input
          id="contact-email-sm"
          type="email"
          placeholder="Email"
          aria-label="Email"
          required="required"
        >
          </input>
        
        <input type="submit" value="Subscribe" id="subsribe-sm"></input>
        </div>
       
      </div>
    </div>
  );
};

export default featured;
