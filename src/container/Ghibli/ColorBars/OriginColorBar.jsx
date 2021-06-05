import movieGenres from '../data/ghibli_movie_genre.json'
import React from "react";
import * as d3 from "d3";
import ghibli from '../data/ghibli_colors.json';
import { Row, Col } from 'antd'

export default function ColorBar({dataType, type, width=600, height=50}) {
  let colorData = [];
  if(dataType == 'fantasy') {
    const movieList = movieGenres['Fantasy'];
    for (let i in movieList) {
      let colors = ghibli[movieList[i]]['colors'];
      colorData.push(...colors);
    }
  } else if(dataType == 'drama') {
    const movieList = movieGenres['Drama'];
    for (let i in movieList) {
      let colors = ghibli[movieList[i]]['colors'];
      colorData.push(...colors);
    }
  } else if(dataType == 'ghibli') {
    colorData = getAllColors(ghibli);
  }

  const sortByHue = colorData.sort((a, b) => (a[0] - b[0]));

  var rectWidth = width / (sortByHue.length);
  const margins = { left: 70, right: 70, top: 100, bottom: 100 }
  
  const originRectBar = sortByHue.map((d, i) => (
    <OriginRect
      key={'origin-'+i}
      width={rectWidth}
      height={50}
      d={d}
      i={i}
    />
  ));

  const hueRectBar = sortByHue.map((d, i) => (
    <HueOnlyRect
      key={'hue-'+i}
      width={rectWidth}
      height={height}
      d={d}
      x={i * rectWidth}
      y={0}
    />
  ));


  const classifiedColors = classifyColors(sortByHue);
  const classifyCategroyXs = [];
  let sum = 0;
  for(let i = 0; i < classifiedColors.length; i++) {
    sum += classifiedColors[i].length;
    classifyCategroyXs.push(sum);
  }
  const classifyWidths = classifyCategroyXs.map((counts, index) => classifyCategroyXs.slice(0,index + 1).reduce((a, b) => (a + b)));
  const colors = [0, 60, 120, 180, 240, 300];
  const classifyRectBar = classifyCategroyXs.map((counts, i) => {
    return (
      <rect
        key={'classify-'+counts}
        x={(classifyCategroyXs[i-1] || 0)}
        y={i*50}
        width={ 10 * width / counts }
        height={50}
        fill={d3.hsl(colors[i], 1, 0.5)} />)
  })

  return(
    <div className='container'>
      <Row justify="center" align="middle">
        <Col className='justify-content-center' style={{margin: `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px` }}>
          <svg height={height} width={width} >
            {type === 'origin' && originRectBar}
            {type === 'hue' && hueRectBar}
            {type === 'classify' && classifyRectBar}
          </svg>
        </Col>
      </Row>
    </div>
  )
}

function OriginRect({width, height, d, i}) {
  return(
    <rect
      x={i * width}
      y={0}
      width={width}
      height={height}
      fill={d3.hsl(d[0], d[1], d[2])} />
  )
}


function HueOnlyRect({width, height, d, x, y}) {
  return(
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={d3.hsl(d[0], 1, 0.5)} />
  )
}

function getAllColors(data) {
  const allColors = [];
  for(const i in data) {
    const movie = data[i];
    allColors.push(...movie.colors);
  }
  return allColors;
}

function classifyColors(data){

  var red = [];
  var yellow = [];
  var cyan = []
  var blue = [];
  var green = [];
  var purple = []
  for(const i in data) {
      let color = data[i];
      let hue = color[0];

      // if(hue >= 0 && hue <= 80) {
      //     warm.push(color);
      // }

      // if(hue > 80 && hue <= 330) {
      //     cold.push(color)
      // }

      if(hue >= 330 && hue <= 360 || hue >=0 && hue < 30) {
          red.push(color);
      } else if(hue < 90 && hue >= 30) {
          yellow.push(color);
      } else if(hue >= 90 && hue < 150) {
          green.push(color);
      } else if(hue >= 150 && hue < 210) {
          cyan.push(color);
      } else if(hue >= 210 && hue < 270) {
          blue.push(color);
      } else if(hue >= 270 && hue < 330) {
          purple.push(color);
      }
  }
  return [
    red,
    yellow,
    green,
    cyan,
    blue,
    purple,
  ];
}

