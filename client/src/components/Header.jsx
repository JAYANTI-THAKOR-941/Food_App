import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        
        {/* LOGO */}
        <h2 className="logo">DeliciousDrop</h2>

        {/* NAV LINKS */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* BUTTON */}
        <button className="order-btn">Order Now</button>

        {/* MOBILE MENU ICON */}
        <div 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </motion.header>
  );
};

export default Header;