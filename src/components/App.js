import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css'
import Page from './Page'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        {/* określenie tła projektu */}
        <div className="">
          <Page />
        </div>
      </Router>
    );
  }
}

export default App;
