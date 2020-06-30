import React from "react";
import "./About.css";
import red from "./images/red.png";
import LinkedInIcon from "./images/linkedin.svg";

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
        <div className="row role-intro justify-content-start">
          <img className="col-6 col-sm-4 col-lg-3 profile" src={red} />
          <div className="col-lg-6">
            <div className="name">
              <h2 className="secondary-h2">
                Alice Li <span>| UX Designer</span>
              </h2>
              <a className="icon" href="#">
                <img src={LinkedInIcon} />
              </a>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
        <div className="row justify-content-lg-end justify-content-md-start role-intro">
          <img className="col-6 col-sm-4 col-lg-3 profile" src={red} />
          <div className="col-lg-6">
            <div className="name">
              <h2 className="secondary-h2">
                Alice Li <span>| UX Designer</span>
              </h2>
              <a className="icon" href="#">
                <img src={LinkedInIcon} />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
