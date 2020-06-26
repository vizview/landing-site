import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/* Components */
import VizView from './container/VizView/VizView.js'


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
