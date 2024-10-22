import React from "react";
import logo from "../assets/WeExist.png"; 
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo of WeExist"  />
            </div>
             
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#involved">Get Involved</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                </ul>
            </nav>

            <div className="header-button">
                <a href="#signup" className="btn signup-btn">Sign In</a>
                <span className="pipe">|</span>
                <a href="#donate" className="btn donate-btn">Donate</a>
            </div>

        </header>
    );
}

export default Header;
