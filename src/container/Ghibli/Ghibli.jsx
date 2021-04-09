import React, { useEffect } from "react";
import * as d3 from "d3";
import ghibli from './data/ghibli_colors.json';
import Intro from './Intro';
import "./ghibli.css";


export default function Ghibli() {
  var width = 600;
  var height = 520;
  var margin = { top: 0, left: 20, bottom: 40, right: 10 };

  function drawRects(){
    var svg = null;
    var g = null;
    const ghibliData = getAllColors(ghibli);
    const sortByHue = ghibliData.sort((a, b) => (a[0] - b[0]));

    svg = d3.select('#vis').selectAll('svg').data([ghibli]);
    var svgE = svg.enter().append('svg');
    svg = svg.merge(svgE);

    svg.attr('width', width + margin.left + margin.right);
    svg.attr('height', height + margin.top + margin.bottom);

    svg.append('g');

    g = svg.select('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    g.selectAll("rect").data(sortByHue).enter()
      .append('rect')
      .attr('class', 'rect')
      .attr("x", (d, i) => i * (width / (sortByHue.length)))
      .attr("y", 0)
      .attr('width', width / (sortByHue.length))
      .attr('height', 50)
      .attr('fill', function(d) { return d3.hsl(d[0], d[1], d[2])})
  }

  useEffect(() => {
    drawRects();
  })

  return(
    <>
      <Intro />
      <section>
        <div id='vis'>
        </div>
      </section>
    </>
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
