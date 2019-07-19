import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/performances">Performances</NavLink>
          </li>
          <li>
            <NavLink to="/school">School</NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;