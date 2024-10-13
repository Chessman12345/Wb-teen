import { useState } from "react";
import navLogo from "../../../img/Group 10.svg";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <a href="Nav.jsx">
            <img src={navLogo} alt="" />
          </a>
        </div>
        <div className="navBar">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav_link">
                Новости
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav_link">
                Портфолио
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav_link">
                Контакты
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav_link">
                Присоедениться к нам
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav_link">
                Курсы
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav_link">
                О компании
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
