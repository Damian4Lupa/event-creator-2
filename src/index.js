import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
// import routes from './app.routes';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router  } from 'react-router-dom';

ReactDOM.render( <App />, document.getElementById('root'));

serviceWorker.unregister();
