// import React from 'react'
// import { Link } from "react-router-dom";
// import '../Navbar/Navbar.css'

// const Navbar = () => {
//     // const [open, setopen] = useState(false);
//   return (

//     <div>
//     <nav className="navbar">

//         <div className="logo">
//             <h1>Muscle<span>Factory</span></h1>
//         </div>

//         <ul className="nav-links">

//             <input type="checkbox" id="checkbox_toggle" />
//             <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

//             <div className="menu">
//                 <li><Link className='lii' href="" to='/'>Home</Link></li>
//                 <li><Link className='lii' href="" to='/Schedule'>Schedule</Link></li>
//                 <li><Link className='lii' href="" to='/Exercises'><span>Free</span> WorkOut</Link></li>
//                 <li><Link className='lii' href="" to='/MemberShip'>Join <span>Now</span></Link></li>
//             </div>
//         </ul>
//     </nav>
// </div>
//   )
// }

// export default Navbar


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