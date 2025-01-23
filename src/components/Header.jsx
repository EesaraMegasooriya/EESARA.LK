import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-16">
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-auto"
            />
          </a>
        </div>
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-95 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:relative md:flex md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:bg-opacity-100`}
        >
          <ul className="flex flex-col space-y-6 items-center mt-16 md:flex-row md:space-y-0 md:space-x-6 md:mt-0">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-400"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Menu Toggle Button */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;
