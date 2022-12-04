import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <h2 className="muscle">Muscle<span className="nav-logo">Factory</span></h2>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link>
        <Link to="/Schedule" onClick={() => setIsOpen(!isOpen)}>Schedule</Link>
        <Link to="/Exercises" onClick={() => setIsOpen(!isOpen)}><span>Free</span> WorkOut</Link>
        <Link to="/MemberShip" onClick={() => setIsOpen(!isOpen)}>Join <span>Now</span></Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;