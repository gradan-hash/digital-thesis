import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Thesis hub</Link>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/upload" onClick={toggleMobileMenu}>
              Upload
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/search" onClick={toggleMobileMenu}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/stats" onClick={toggleMobileMenu}>
              Stats
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
