import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/WeExist.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo of WeExist" />
            </div>

            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/work">Our Work</Link></li>
                    <li className="dropdown">
                        <Link to="#involved" className="dropbtn">
                            Get Involved <span className="arrow">▼</span>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/volunteer">Volunteer</Link>
                            <Link to="/donate">Donate</Link>
                            <Link to="/partner">Partner with Us</Link>
                        </div>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                </ul>
            </nav>

            <div className="header-buttons">
                <Link to="/signup" className="btn signup-btn">Sign In</Link>
                <span className="pipe">|</span>
                <Link to="/donate" className="btn donate-btn">Donate</Link>
            </div>
        </header>
    );
}

export default Header;
