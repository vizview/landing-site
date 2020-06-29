import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="pages">
          <a href="/">Home</a>
          <span> | </span>
          <a href="/work">Work</a>
          <span> | </span>
          <a href="/about">About</a>
          <span> | </span>
          <a href="/about">Contact</a>
        </div>

        <div className="copyright">
          <small>Copyright &copy; 2020 VizView - All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default footer;
