import React from "react";
import "./Team.css";

class Team extends React.Component {
  onHover(e, name) {
    e.setAttribute("src", `../../img/team/${name}_2.png`);
  }

  render() {
    return (
      <div className="team">
        <h2>Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        <div className="members">
          <div className="member">
            <img
              className="profile"
              onMouseEnter={(e) => {
                e.currentTarget.src = require("../../img/team/alice_2.png");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = require("../../img/team/alice_1.png");
              }}
              src={require(`../../img/team/alice_1.png`)}
            />
            <h3 className="mem-name">Alice Li</h3>
            <h4 className="title">UX DEISGNER</h4>
          </div>
          <div className=" member">
            <img
              className="profile"
              onMouseEnter={(e) => {
                e.currentTarget.src = require("../../img/team/grace_2.png");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = require("../../img/team/grace_1.png");
              }}
              src={require(`../../img/team/grace_1.png`)}
            />
            <h3 className="mem-name">Grace Zhu</h3>
            <h4 className="title">UX DEISGNER</h4>
          </div>
          <div className="member">
            <img
              className="profile"
              src={require(`../../img/team/alice_1.png`)}
            />
            <h3 className="mem-name">Yiran Ni</h3>
            <h4 className="title">SOFTWARE DEVELOPER</h4>
          </div>
          <div className="member">
            <img
              className="profile"
              src={require(`../../img/team/zhitao_1.png`)}
              onMouseEnter={(e) => {
                e.currentTarget.src = require("../../img/team/zhitao_2.png");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = require("../../img/team/zhitao_1.png");
              }}
            />
            <h3 className="mem-name">Zhitao Zheng</h3>
            <h4 className="title">PRODUCT MANAGER</h4>
          </div>
          <div className=" member">
            <img
              className="profile"
              onMouseEnter={(e) => {
                e.currentTarget.src = require("../../img/team/zk_2.png");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = require("../../img/team/zk_1.png");
              }}
              src={require(`../../img/team/zk_1.png`)}
            />
            <h3 className="mem-name">Zhiqi Lin</h3>
            <h4 className="title">SOFTWARE DEVELOPER</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
