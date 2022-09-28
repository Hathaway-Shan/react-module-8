import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <NavLink className="link" to="/rgb/0/0/255">
            Blue
          </NavLink>
        </div>
        <div>
          <NavLink className="link" to="/rgb/138/43/226">
            BlueViolet
          </NavLink>
        </div>
        <div>
          <NavLink className="link" to="/rgb/127/255/0">
            Chartreuse
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
