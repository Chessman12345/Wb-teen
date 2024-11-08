import React from "react";
import "./NewsPage.css";
import { NavLink, Outlet } from "react-router-dom";

const LayoutNewsPage = () => {
  const OnClick = (e) => {
    e.classList.toggle("active");
  };

  return (
    <>
      <section className="NewsPage">
        <div className="container">
          <div className="NewsPage__container">
            <div className="NawsPage__title">
              <h1>Новости</h1>
            </div>
          </div>
          <div className="NewsPage__nav-wrapper">
            <nav className="NewsPage__nav">
              <li onClick={OnClick}>
                <NavLink to="/news">Все</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/NewsSport">Спорт</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/NewsEntertainment">Развлечение</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/NewsPoster">Афиша</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/NewsPolicy">Политика</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/NewsEvent">Мероприятия</NavLink>
              </li>
              <li onClick={OnClick}>
                <NavLink to="/NewsEconomy">Экономика</NavLink>
              </li>
            </nav>
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
};

export default LayoutNewsPage;
