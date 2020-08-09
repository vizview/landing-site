import React from "react";
import "./Cereal.css";

import Intro from "./Intro/Intro.js";
import Timeline from "./Timeline/Timeline.js";
import Sale from "./Sale/Sale.js";
import Magnifier from "./Magnifier/Magnifier.js";
import Shelf from "./Shelf/Shelf.js";

const cereal = () => {
  return (
    <div className="cereal_project">
      <Intro />
      <Timeline />
      <Sale />
      <Magnifier />
      <Shelf />
    </div>
  );
};

export default cereal;
