import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../container/VizView/img/icons/hamburger.svg";
import "./Navbar.css";

export default class navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.toggleDropdownState =  this.toggleDropdownState.bind(this)
  }

  toggleDropdownState() {
    const currentState = this.state.isClicked;
    this.setState({
      isClicked: !currentState
    })

    console.log(currentState)
  }

  render() {
    return (
      
        <div>
          <nav className="navbar navbar-light">
            <NavLink className="navbar-brand" exact to="/">
              VizView
          </NavLink>

            <div className=" justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav web">
                <NavLink className="inactive" to="/" exact>
                  Home
              </NavLink>
                <NavLink className="inactive" to="/work" exact>
                  Work
              </NavLink>
                <NavLink className="inactive" to="/about" exact>
                  About
              </NavLink>
                <NavLink className="inactive" to="/contact" exact>
                  Contact
              </NavLink>
              </div>
              <div className="navbar-nav mobile" >
                <div className={`hamburger  ${this.state.isClicked ? "active": "inactive"}` }
                  onClick={this.toggleDropdownState}
                >
  
                  <img src={hamburger} />
                </div>
              </div>
            </div>
          </nav>
        
        <div className={`nav-dropdown  ${this.state.isClicked ? "active": "inactive"}`}>
          <div className="dropdown-item">
            <NavLink className="inactive" to="/" exact>
              Home
              </NavLink>
          </div>
          <div className="dropdown-item">
            <NavLink className="inactive" to="/work" exact>
              Work
              </NavLink>
          </div>
          <div className="dropdown-item">
            <NavLink className="inactive" to="/about" exact>
              About
              </NavLink>
          </div>
          <div className="dropdown-item">
            <NavLink className="inactive" to="/contact" exact>
              Contact
              </NavLink>
          </div>
        </div>
      </div >
    )
  }
  
  
};

