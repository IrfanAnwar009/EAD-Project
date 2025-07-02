// components/Navigation.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // We'll add this CSS separately

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">IBA CC JCD</div>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/faculty" onClick={closeMenu}>
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes" onClick={closeMenu}>
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" onClick={closeMenu}>
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/admission" onClick={closeMenu}>
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/AdminDashboard" onClick={closeMenu}>
              Admin Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
