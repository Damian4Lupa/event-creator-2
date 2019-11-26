import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css'
import '../styles/Img.css'

import CreateEvent from '../pages/CreateEvent'
import Clock from '../pages/Clock'
import ErrorPage from '../pages/ErrorPage';



// import Page from './Page'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <HashRouter basename={"/"}>

          <Switch>
            <Route exact path="/" component={CreateEvent} />
            <Route path="/clock" component={Clock} />
            <Route component={ErrorPage} />
          </Switch>

        </HashRouter>




        {/* <Page /> */}

      </Router>
    );
  }
}

export default App;
