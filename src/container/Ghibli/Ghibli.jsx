import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import ghibli from "./data/ghibli_colors.json";
import Intro from "./Intro";
import "./ghibli.css";
import OverallSection from "./overallSection/OverallSection";

export default function Ghibli() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);




  return (
    <div className="ghibli" >
      <Intro />
      <OverallSection scrollPosition={scrollPosition}/>
    </div>
  );
}

function getAllColors(data) {
  const allColors = [];
  for (const i in data) {
    const movie = data[i];
    allColors.push(...movie.colors);
  }
  return allColors;
}
