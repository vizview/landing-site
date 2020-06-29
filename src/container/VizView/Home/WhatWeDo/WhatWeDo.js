import React from "react";
import "./WhatWeDo.css";

const whatwedo = () => {
  return (
    <div className="whatwedo">
      <h2>What We Do</h2>
      <p>
        We make data more interactive, fun, and comprehensible. At VizView, we
        want to bring you insights on interesting topics through the lens of
        data. We explore, research, analyze, and visualize information to let
        the numbers tell their own stories.
      </p>
      <div className="works-wrapper">
        <div className="work">
          <h4>Analyze</h4>
          <div
            style={{ backgroundColor: "var(--secondary-color-1)" }}
            className="work-background"
          ></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="work-img"></div>
        </div>
        <div className="work">
          <h4>Design</h4>
          <div
            style={{ backgroundColor: "var(--secondary-color-2)" }}
            className="work-background"
          ></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="work-img"></div>
        </div>
        <div className="work">
          <h4>Develop</h4>
          <div
            style={{ backgroundColor: "var(--secondary-color-4)" }}
            className="work-background"
          ></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="work-img"></div>
        </div>
      </div>
    </div>
  );
};

export default whatwedo;
