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
      <div className='cereal-conclusion mt-5'>
        <p className="cereal-intro-p">
          We saw that when a cereal brand contains more sugar, it tends to have higher calories as well. Out of all the Best Selling Cereals, every brand except for Special K has a sugar level above the average and a calorie level slightly above the average. Sweeter cereals are the winners here, but which one is your favorite?
        </p>
      </div>
    </div>
  );
};

export default cereal;
