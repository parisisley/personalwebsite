import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import eiffel from "../images/eiffel-tower.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={eiffel} alt="Eiffel Tower" className="eiffel-tower" />
        </Link>
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        <div className="close-menu" onClick={() => setIsOpen(false)}>
          ✖
        </div>
      </ul>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
