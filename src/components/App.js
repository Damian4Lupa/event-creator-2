import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.sass'
import '../styles/Img.sass'
import CreateEvent from '../pages/CreateEvent'
import Clock from '../pages/Clock'
import ErrorPage from '../pages/ErrorPage';

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
      </Router>
    );
  }
}

export default App;
