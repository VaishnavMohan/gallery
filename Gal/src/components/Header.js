import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">FIAT</div>
      <div className="header-nav">
        <button>Langue</button>
        <button>My Fiat</button>
      </div>
    </div>
  );
}

export default Header;
