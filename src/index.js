import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './home/templates/App';
import NoFind from './utills/pages/NoFind';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Test from './utills/molecules/LogoLink';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/404' component={NoFind} />
      <Route component={Test} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
