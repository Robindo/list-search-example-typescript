import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Example from './Example';
import ExampleDetails from '../components/ExampleDetails/ExampleDetails';

const Container: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Example} />
      <Route exact={true} path="/details/:id?" component={ExampleDetails} />
    </Switch>
  </Router>
);

export default Container;
