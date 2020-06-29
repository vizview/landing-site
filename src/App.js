import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Components */
import VizView from "./container/VizView/VizView.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <VizView />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
