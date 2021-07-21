import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Page from './Page/Page';

import '../styles/styles.scss';

const App: React.FC = () => (
  <div className="App">
    <Switch>
      <Route exact path="/home">
        <Page />
      </Route>
      <Route render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
  </div>
);

export default App;
