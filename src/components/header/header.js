import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './header.css';
import RGB from '../rgb/rgb';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink className="blue" to="/rgb/127/255/0">
            Blue
          </NavLink>
        </li>
        <li>
          <NavLink className="blueViolet" to="/rgb/127/255/0">
            BlueViolet
          </NavLink>
        </li>
        <li>
          <NavLink className="chartreuse" to="/rgb/127/255/0">
            Chartreuse
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
