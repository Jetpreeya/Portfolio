import React from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar(){
    return (
    <div className="navbar">
        <div className="toggleButton">
            <button>
                <NavDropdown />
            </button>
        </div>
        <div className="links">
            <Link to ="/"> Home </Link>
            <Link to ="/projects"> Projects </Link>
            <Link to ="/experience"> Experience </Link>
        </div>
    </div>
    );
}

export default Navbar; 