import React from "react";
import "./Cereal.css";

import Intro from "./Intro/Intro.js";
import Timeline from "./Timeline/Timeline.js";
import Sale from "./Sale/Sale.js";
import Magnifier from "./Magnifier/Magnifier.js";

const cereal = () => {
  return (
    <div className="cereal_project">
      <div className="breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/work">All Projects</a>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              What’s in your Cereal?
            </li>
          </ol>
        </nav>
      </div>
      <Intro />
      <Timeline />
      <Sale />
      <Magnifier />
    </div>
  );
};

export default cereal;
