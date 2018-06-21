import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Container from './components/container';

render(
  <Provider store={ store }>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/:dimension?" component={ Container } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
