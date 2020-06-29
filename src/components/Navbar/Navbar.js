import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <NavLink className="navbar-brand" exact to="/">
          VizView
        </NavLink>

        <div className="justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
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
        </div>
      </nav>
    </div>
  );
};

export default navbar;
