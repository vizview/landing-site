import React from "react";
import "./WhatWeDo.css";

export default class whatwedo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHighlight: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const hightlight1 = document.getElementById("hightlight-1");
    var rect = hightlight1.offsetTop - 500;
    console.log(rect);

    if (winScroll >= rect) {
      this.setState({
        showHighlight: true,
      });
    }

    console.log(winScroll);
  };

  render() {
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
              id="hightlight-1"
              className={`work-background ${
                this.state.showHighlight ? "showHighlight" : ""
              }`}
            ></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="work-img"></div>
          </div>
          <div className="work">
            <h4>Design</h4>
            <div
              // style={{ backgroundColor: "var(--secondary-color-2)" }}
              id="hightlight-2"
              className={`work-background ${
                this.state.showHighlight ? "showHighlight" : ""
              }`}
            ></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="work-img"></div>
          </div>
          <div className="work">
            <h4>Develop</h4>
            <div
              id="hightlight-3"
              // style={{ backgroundColor: "var(--secondary-color-4)" }}
              className={`work-background ${
                this.state.showHighlight ? "showHighlight" : ""
              }`}
            ></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="work-img"></div>
          </div>
        </div>
      </div>
    );
  }
}
