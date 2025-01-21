import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f4f4f4" }}>
      <Link to="/home" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
