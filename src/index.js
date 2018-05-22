import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './components/container';
import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={ Container } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
