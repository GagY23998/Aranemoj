import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-ligh">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
