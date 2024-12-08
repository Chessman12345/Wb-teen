import { useState } from "react";
import navLogo from "../../../img/Group 10.svg";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const OnClick = (e) => {
    let links = document.querySelectorAll(".link__active");
    if (e.target.classList.contains("link__active")) {
      links.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <NavLink to="/home">
              <img src={navLogo} alt="" />
            </NavLink>
          </div>
          <div className="navBar">
            <ul className="nav__list" onClick={OnClick}>
              <li>
                <NavLink to="/home" className="link__active">
                  Главная страница
                </NavLink>
              </li>
              <li>
                <NavLink to="/Links" className="link__active">
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="link__active">
                  Курсы
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="link__active">
                  Портфолио
                </NavLink>
              </li>

              <li>
                <NavLink to="/contacts" className="link__active">
                  Контакты
                </NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/AboutTheCompany" className="link__active">
                  О компании
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
