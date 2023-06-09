import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <p>Recipe App</p>
      <div className="search">
        <input />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
