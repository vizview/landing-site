import React from "react";
import Route from "react-router-dom/Route";

/* Components */
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";

import Home from "./Home/Home.js";
import Work from "./Work/Work.js";
import About from "./About/About.js";

const vizview = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Route path="/" exact strict component={Home} />
      <Route path="/work" exact strict component={Work} />
      <Route path="/about" exact strict component={About} />
      <Footer />
    </div>
  );
};

export default vizview;
