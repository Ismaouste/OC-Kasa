import React from 'react';

function Header() {
  return <header>
    <div className="header">
      <div className="header__logo">
        <a href="/">
        <img src="/img/logo.png" alt="Logo Kasa" />
        </a>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">A Propos</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
}

export default Header;