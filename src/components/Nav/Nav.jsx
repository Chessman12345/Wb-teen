import { useState } from "react";
import navLogo from "../../../img/Group 10.svg";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <sidebar className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <Link to="Nav.jsx">
              <img src={navLogo} alt="" />
            </Link>
          </div>
          <div className="navBar">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/home" className="nav_link">
                  Главная страница
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/news" className="nav_link">
                  Новости
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/portfolio" className="nav_link">
                  Портфолио
                </Link>
              </li>

              <li className="nav__item">
                <Link to="/contacts" className="nav_link">
                  Контакты
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/joinUs" className="nav_link">
                  Присоедениться к нам
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/courses" className="nav_link">
                  Курсы
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/company" className="nav_link">
                  О компании
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </sidebar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
