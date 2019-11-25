import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App'
import routes from './app.routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, hashHistory  } from 'react-router-dom';

ReactDOM.render( <Router routes={routes}></Router>, document.getElementById('root'));

serviceWorker.unregister();
