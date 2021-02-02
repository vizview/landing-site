import React from "react";
import "./Work.css";
import sample from "./sample.jpg";

const work = () => {
  return (
    <div className="section">
      <div className="project">
        <div className="proj-img">
          <a href="/cereal">
            <img src={sample} alt='cereal project'/>
          </a>
        </div>
        <div className="proj-intro">
          <a href="/cereal">
            <h1 className="proj-heading">What's in your cereal?</h1>
          </a>
          <p className="proj-desc">
            Come discover what is actually in your cereal. Play with cereal
            data!
          </p>
        </div>
      </div>
      <div className="project-reverse">
        <div className="proj-img-reverse ">
          <a href="#">
            <img src={sample} />
          </a>
        </div>
        <div className="proj-intro-reverse">
          <a href="#">
            <h1 className="proj-heading">What's in your cereal?</h1>
          </a>
          <p className="proj-desc">
            Come discover what is actually in your cereal. Play with cereal
            data!
          </p>
        </div>
      </div>
      <div className="project last">
        <div className="proj-img">
          <a href="#">
            <img src={sample} />
          </a>
        </div>
        <div className="proj-intro">
          <a href="#">
            <h1 className="proj-heading">What's in your cereal?</h1>
          </a>
          <p className="proj-desc">
            Come discover what is actually in your cereal. Play with cereal
            data!
          </p>
        </div>
      </div>
    </div>
  );
};

export default work;
