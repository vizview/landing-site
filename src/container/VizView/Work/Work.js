import React from "react";
import "./Work.css";
const work = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col project">
          <div>
            <img src="./sample.jpg" />
          </div>
          <div className="proj_intro">
            <h1 className="proj_heading">Proejct Name</h1>
            <p className="proj_desc">Proejct Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
