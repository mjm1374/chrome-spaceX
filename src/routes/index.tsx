import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import Test from './Page/Page';

import '../styles/styles.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/NonDescrim">
          <Homepage />
        </Route>
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  );
};

export default App;
