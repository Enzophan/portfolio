import React, { useState } from "react";
import "./header.css";

// https://iconscout.com/unicons

type Props = {};

const Header = (props: Props) => {
  // Change background Header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    // When the scroll is higher than 200 viewpoint height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  });
  // Toggle Menu

  const [toggle, setToggle] = useState<Boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("#home");

  const handleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Zinzo
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={`nav__link ${
                  activeNav === "#home" ? "active-link" : null
                }`}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={`nav__link ${
                  activeNav === "#about" ? "active-link" : null
                }`}
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={`nav__link ${
                  activeNav === "#skills" ? "active-link" : null
                }`}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={`nav__link ${
                  activeNav === "#services" ? "active-link" : null
                }`}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={`nav__link ${
                  activeNav === "#portfolio" ? "active-link" : null
                }`}
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={`nav__link ${
                  activeNav === "#contact" ? "active-link" : null
                }`}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={handleMenu}></i>
        </div>
        <div className="nav__toggle" onClick={handleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
