import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import API, { ROUTES } from './api';
import PAGES from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            {Object.keys(ROUTES).map(name => (
              <Route
                exact={false}
                {...ROUTES[name]}
                key={name}
                component={PAGES[name] ? PAGES[name] : false}
              />
            ))}
          </Switch>
          <Redirect from='/' to='/main'/>
        </Router>
      </div>
    )
  }
}

export default API.connect(App);
