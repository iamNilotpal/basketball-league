import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Teams from './Teams';
import Players from './Players';
import TeamPage from './TeamPage';
import Articles from './Articles';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/:teamId" exact>
            <TeamPage />
          </Route>
          <Route path="/:teamId/articles/">
            <Articles />
          </Route>
          <Route path="*">
            <h1 className="text-center">404 - Page Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
