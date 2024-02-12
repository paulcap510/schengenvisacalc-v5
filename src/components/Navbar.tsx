import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-title">Paul's Visa Calculator</div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
