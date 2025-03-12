import React from 'react'
// src/components/Navbar.jsx
// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#007BFF', padding: '1rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', listStyle: 'none', margin: 0, padding: 0, color: 'white' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>About</Link></li>
        <li><Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

