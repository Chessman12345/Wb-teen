import { useState } from "react";
import navLogo from "../../../img/Group 10.svg";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const OnClick = (e) => {
    e.classList.toggle("active");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <NavLink to="/logoHome">
              <img src={navLogo} alt="" />
            </NavLink>
          </div>
          <div className="navBar">
            <ul className="nav__list">
              <li onClick={OnClick}>
                <NavLink to="/home">Главная страница</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/news">Новости</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/courses">Курсы</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/portfolio">Портфолио</NavLink>
              </li>

              <li onClick={OnClick}>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/joinUs">Присоедениться к нам</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/AboutTheCompany">О компании</NavLink>
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
