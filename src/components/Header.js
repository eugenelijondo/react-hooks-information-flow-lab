// Header.js
import React from 'react';

function Header({ darkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
