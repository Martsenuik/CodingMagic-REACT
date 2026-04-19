import "../css/header.css";
import { useState } from "react";
import logo from "../images/svg/logo.svg";
import svgDropDownArrow from "../images/svg/arrow.svg";

export const Header = ({ dropDownData }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    if ((openMenu = true)) {
    }
  };
  return (
    <>
      <header className="header">
        <div className="container1">
          <div className="header__container">
            <img src={logo} alt="logo" />
            <nav className="header__nav">
              <ul className="header__nav-list list">
                <li className="header__nav-item">
                  <a
                    className="header__nav-link link"
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  >
                    Інтерактив
                    <img src={svgDropDownArrow} alt="arrow" />
                  </a>
                  <ul
                    className={`header__dropdown ${openMenu ? "active" : ""}`}
                  >
                    {dropDownData.map((name) => {
                      return (
                        <li key={name} className="header__dropdown-item">
                          <button
                            type="button"
                            className="header__dropdown-btn"
                            // data-changeBtn="all"
                          >
                            {name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="header__nav-item">
                  <a href="#ourTeam" className="header__nav-link link">
                    Наша команда
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#footer" className="header__nav-link link">
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
