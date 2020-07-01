import React from "react";
import "./Team.css";
import red from "../../img/team/red.png"

const team = () => {
  return (
    <div className="team">
        <h2>Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
        <div className="members">
            <div className="member">
                <img className="profile" src={red}/>
                <h3 className="mem-name">Alice Li</h3>
                <h4 className="title">UX DEISGNER</h4>
            </div>
            <div className=" member">
                <img className="profile" src={red}/>
                <h3 className="mem-name">Grace Zhu</h3>
                <h4 className="title">UX DEISGNER</h4>
            </div>
            <div className="member">
                <img className="profile" src={red}/>
                <h3 className="mem-name">Yiran Ni</h3>
                <h4 className="title">SOFTWARE DEVELOPER</h4>
                
            </div>
            <div className="member">
                <img className="profile" src={red}/>
                <h3 className="mem-name">Zhitao Zheng</h3>
                <h4 className="title">PRODUCT MANAGER</h4>
            </div>
            <div className=" member">
                <img className="profile" src={red}/>
                <h3 className="mem-name">Zhiqi Lin</h3>
                <h4 className="title">SOFTWARE DEVELOPER</h4>
            </div>
        </div>
    </div>
  );
};

export default team;
