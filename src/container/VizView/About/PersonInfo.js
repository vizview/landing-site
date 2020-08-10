import React from "react";
import "./About.css";
import data from "./AboutData.json";
import LinkedInIcon from "../img/icons/linkedin.svg";

export default class PersonInfo extends React.Component {
  render() {
    var rowClass = "justify-content-start";
    if (this.props.justify == "end") {
      rowClass = "justify-content-lg-end justify-content-md-start";
    }
    return (
      <div className={`row role-intro ${rowClass}`}>
        <img
          className="col-6 col-sm-4 col-lg-3 profile"
          src={require(`../img/team/${this.props.name}_1.png`)}
          onMouseEnter={(e) => {
            e.currentTarget.src = require(`../img/team/${this.props.name}_2.png`);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = require(`../img/team/${this.props.name}_1.png`);
          }}
          alt={`${this.props.name}'s picture`}
        />
        <div className="col-lg-6">
          <div className="name">
            <h2 className="secondary-h2">
              {data[this.props.name].name}{" "}
              <span>| {data[this.props.name].position}</span>
            </h2>
            <a className="icon" href={data[this.props.name].linkedin}>
              <img src={LinkedInIcon} />
            </a>
          </div>

          <p>{data[this.props.name].desc}</p>
        </div>
      </div>
    );
  }
}
