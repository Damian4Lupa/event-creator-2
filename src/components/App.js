import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css'
import '../styles/Img.css'

import Page from './Page'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div>
          <Page />
        </div>
      </Router>
    );
  }
}

export default App;
