import React from "react";
import Route from "react-router-dom/Route";
import "./VizView.css";

/* Components */
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";

import Home from "./Home/Home.js";
import Work from "./Work/Work.js";
import About from "./About/About.js";
import Contact from "./Contact/Contact.js";
import Cereal from "../Cereal/Cereal.js";

const vizview = () => {
  return (
    <div className="vizview">
      <header>
        <Navbar />
      </header>
      <body>
        <Route path="/" exact strict component={Home} />
        <Route path="/work" exact strict component={Work} />
        <Route path="/about" exact strict component={About} />
        <Route path="/contact" exact strict component={Contact} />
        <Route path="/cereal" exact strict component={Cereal} />
      </body>

      <Footer />
    </div>
  );
};

export default vizview;
