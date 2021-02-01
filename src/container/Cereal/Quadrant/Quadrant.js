import React, { useEffect, useRef, Component } from "react";
import * as d3 from "d3";
import * as _ from "lodash"
import dataSource from '../Data/cereals.json';
import './Quadrant.css';
import XAxis from "./XAxis"
import YAxis from "./YAxis"
import ImagePlaceholder from './ImagePlaceholder'
import DisplayShelf from './DisplayShelf'

import { Row, Col, Skeleton, Space } from 'antd'
import ResponsiveWrapper from "../ResponsiveWrapper/ResponsiveWrapper";
import { takeRightWhile } from "lodash";



class Quadrant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredDot: null,
      clickedDot: null,
      clicked: false
    }
  }

  render() {

    console.log(this.state.clickedDot)

    const width = this.props.parentWidth * 16 / 24
    const height = width

    const margins = { left: 70, right: 70, top: 70, bottom: 70 }


    const xScale = d3.scaleLinear().domain(d3.extent(dataSource, d => d[this.props.x])).range([margins.left, width - margins.right]);
    const yScale = d3.scaleLinear().domain(d3.extent(dataSource, d => d[this.props.y])).range([height - margins.bottom, margins.top])


    const arrSum = arr => arr.reduce((a, b) => a + b, 0)
    const xAverage = arrSum(dataSource.map(d => d[this.props.x])) / dataSource.length
    const yAverage = arrSum(dataSource.map(d => d[this.props.y])) / dataSource.length

    const groupedData = dataSource.reduce((result, item) => {


      var x = result[item[this.props.x]] = result[item[this.props.x]] || {};

      var y = x[item[this.props.y]] = x[item[this.props.y]] || [];


      y.push(item);

      return result;

    }, {});


    let xValue;
    let dotsData = []
    for (xValue in groupedData) {

      let yValue;
      for (yValue in groupedData[xValue]) {
        let obj = {};
        obj.xValue = xValue;
        obj.yValue = yValue;
        obj.data = groupedData[xValue][yValue]
        dotsData.push(obj)
      }


    }

    // console.log(dotsData)


    return (
      <section className="cereal-quadrant-section">
        <div className="container">
          <Row >
            <Col span={16}>
              <svg height={height} width={width}>
                <XAxis xScale={xScale} margins={margins} transform={`translate(0, ${height - margins.bottom})`} />
                <YAxis yScale={yScale} margins={margins} transform={`translate(${margins.left}, 0)`} />
                <line x1={xScale(xAverage)} y1={margins.top} x2={xScale(xAverage)} y2={height - margins.bottom} stroke="#DFCBB6" strokeWidth={2} />
                <line x1={margins.left} y1={yScale(yAverage)} x2={width - margins.right} y2={yScale(yAverage)} stroke="#DFCBB6" strokeWidth={2} />

                <text x={width / 2} y={height - margins.bottom + 40} fill='#E4493A' textAnchor="middle" fontSize={16}>{this.props.x}</text>
                <text fill='#E4493A' fontSize={16} textAnchor="middle" x={-width / 2} y={24} transform="rotate(-90)">{this.props.y}</text>
                <g>
                  {dotsData.map((dot, i) => {

                    return (<g
                      key={i}>
                      <circle r={this.state.hoveredDot == i ? dot.data.length + 5 : dot.data.length + 3}
                        cx={xScale(dot.xValue)}
                        cy={yScale(dot.yValue)}
                        fill={"#E4493A"}
                        stroke="#C3A483"
                        strokeWidth={this.state.hoveredDot == i ? 2 : 0}
                        onMouseOver={(d) => { this.setState({ hoveredDot: i }) }}
                        onMouseOut={(d) => { this.setState({ hoveredDot: null }) }}
                        style={{ cursor: "pointer" }}
                        onClick={(d) => { this.setState({ clickedDot: dot, clicked: true }) }}
                      />
                    </g>)

                  })}
                </g>
                <rect x={margins.left + 2} y={yScale(yAverage) - 20} width={60} height={18} fill="#FFF8ED" fillOpacity="0.5" />
                <text fill="black" x={margins.left + 4} y={yScale(yAverage) - 6} fontSize={14}>Average</text>
                <rect x={xScale(xAverage) + 2} y={height - margins.bottom - 20} width={60} height={18} fill="#FFF8ED" fillOpacity="0.5" />
                <text fill="black" x={xScale(xAverage) + 4} y={height - margins.bottom - 6} fontSize={14}>Average</text>
              </svg>
            </Col>
            <Col span={8}>
              <div style={{ height: height - margins.top, border: '#DFCBB6', borderStyle: 'solid', borderWidth: 1, marginTop: margins.top, marginLeft: margins.left, padding: "24px 16px 24px 16px", overflowY: 'scroll', backgroundColor: '#FFF8ED' }}>
                {this.state.clickedDot === null && (

                  <div style={{ position: 'relative' }}>
                    <div style={{ textAlign: 'center', position: 'absolute', top: '100px', zIndex: 10 }}>
                      <p>Click on point on the graph to view the cereals</p>
                    </div>


                    <div style={{ zIndex: -10 }}>
                      <ImagePlaceholder />
                      <ImagePlaceholder />
                      <ImagePlaceholder />
                      <ImagePlaceholder />
                      <ImagePlaceholder />


                    </div>


                  </div>

                )}
                <div>
                  {this.state.clickedDot &&
                    (
                      this.state.clickedDot.data.map((dot, i) => {
                        return (
                          <DisplayShelf data={dot} key={dot.name} />
                        )
                      })
                    )}
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </section >
    )
  }
}

export default ResponsiveWrapper(Quadrant)
