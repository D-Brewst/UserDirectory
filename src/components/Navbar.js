import React from "react";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Employee Directory</a>
    </nav>
  );
}

export default Navbar;