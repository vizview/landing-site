import React, { useEffect } from "react";
import * as d3 from "d3";
import ghibli from './data/ghibli_colors.json';
import Intro from './Intro';
import "./ghibli.css";
import OverallSection from './overallSection/OverallSection';

export default function Ghibli() {
  return(
    <div className='ghibli'>
      <Intro />
      <OverallSection />
    </div >
  );
}


function getAllColors(data) {
  const allColors = [];
  for(const i in data) {
    const movie = data[i];
    allColors.push(...movie.colors);
  }
  return allColors;
}
