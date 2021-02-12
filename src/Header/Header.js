import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="Link_header">
        <div className="Header_left">
          <span>PSR</span>
        </div>
      </Link>

      <div className="Header_right">
        <Link to="/contact" className="Link_header">
          <span className="Header_nav">Contact</span>
        </Link>
        <Link to="/about" className="Link_header">
          <span className="Header_nav">About</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
