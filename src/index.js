import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route path="/:tab/:uid" component={App} />
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
