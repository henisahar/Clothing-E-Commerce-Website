import React, { useState } from "react";
import { useRef } from "react";

import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {Link} from "react-router-dom";

function Navbar(){
    const dropdownmenu = useRef ();
    const toggleBtn = useRef ();
    const showNavbar = () => {
		dropdownmenu.current.classList.toggle(
			"open"
		);
        }
    ;
    const [isClicked, setIsClicked] = useState(false);
    const handleIconClick = () => {
        setIsClicked(!isClicked);
      };
      
    
    return(
       <header>
        <div className="navbar">
        <div className="logo"><h5>LOGO</h5></div>
    
    <ul className="links">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/articles" className="nav-link">Products</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
    </ul>

    <div className="search">
    <input type="text" placeholder="  Search" required/> 
    <BiSearch className="icon" />
    </div>
    <div className="toggle_btn" ref={toggleBtn} onClick={showNavbar} >
    {isClicked ? (
  <FaTimes onClick={handleIconClick} />
) : (
  <FaBars onClick={handleIconClick} />
)}
    </div>
        </div>
        <div className="dropdown_menu" ref={dropdownmenu}>
        <ul className="links">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/articles" className="nav-link">Products</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
    </ul>

    <div className="search">
    <input type="text" placeholder="  Search" required/> 
    <BiSearch className="icon" />
    </div>
        </div>
    
 
       </header>


    )
}
 
export default Navbar;