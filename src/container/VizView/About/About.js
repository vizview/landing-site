import React from "react";
import "./About.css";
import red from "../img/team/alice_1.png";
import LinkedInIcon from "../img/icons/linkedin.svg";
import PersonInfo from "./PersonInfo.js";

const about = () => {
  return (
    <div className="container">
      <section className="row justify-content-center story">
        <div className="col-lg-8">
          <h1>Our Stroy</h1>
          <p>
            We make data more interactive, fun, and comprehensible. At VizView,
            we want to bring you insights on interesting topics through the lens
            of data. We explore, research, analyze, and visualize information to
            let the numbers tell their own stories.
          </p>
        </div>
      </section>

      <section className="team">
        <PersonInfo name="alice" justify="start" />
        <PersonInfo name="alice" justify="end" />
        <PersonInfo name="alice" justify="start" />
        <PersonInfo name="alice" justify="end" />
        <PersonInfo name="alice" justify="start" />
      </section>
    </div>
  );
};

export default about;
