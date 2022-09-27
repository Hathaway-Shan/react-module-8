import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <NavLink className="blue" to="/#/0000FF">
              Blue
            </NavLink>
          </li>
          <li>
            <NavLink className="blueViolet" to="/#/8A2BE2">
              BlueViolet
            </NavLink>
          </li>
          <li>
            <NavLink className="chartreuse" to="/#/7FFF00">
              Chartreuse
            </NavLink>
          </li>
        </ul>
        <div className="switchBox">
          <Switch>
            <Route></Route>
            <Route></Route>
          </Switch>
        </div>
      </header>
    </Router>
  );
}
