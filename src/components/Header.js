import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../img/LePetit.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre aberto e fechado
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <span className="logo-text">Manutenção</span>
      </div>

      {/* Botão do menu hambúrguer (visível apenas em telas pequenas) */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Lista de navegação */}
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
          <li><a href="#sobre-nos" onClick={toggleMenu}>Sobre Nós</a></li>
          <li><a href="#servicos" onClick={toggleMenu}>Serviços</a></li>
          <li><a href="#localizacao" onClick={toggleMenu}>Localização</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;