import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink className="blue" to="/rgb/0/0/255">
            Blue
          </NavLink>
        </li>
        <li>
          <NavLink className="blueViolet" to="/rgb/138/43/226">
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
