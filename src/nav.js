import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div to="/">Otaku-Blog</div>
      </div>
      <div className="nav-links">
        <Link to="/" exact>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-toggle" onClick={toggleNav}>
        <i className={`fas fa-bars ${isOpen ? "open" : ""}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
