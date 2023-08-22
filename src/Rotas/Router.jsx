import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../Views/LoginPage';
import SelectPage from '../Views/SelectPage';
import TeamInfoPage from '../Views/TeamInfoPage';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/select" component={SelectPage} />
      <Route path="/team" component={TeamInfoPage} />
      </Switch>
    </Router>
  );
}

export default App;
