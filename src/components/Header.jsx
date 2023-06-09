import React, { useState } from "react";
import "./Header.css";

function Header({ search, setSearch, setQuery, isLoading }) {
  const handdleClick = () => {
    if (search !== "") {
      setQuery(search);
    }
  };

  return (
    <div className="Header">
      <p>Recipe App</p>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button disabled={isLoading} onClick={handdleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
