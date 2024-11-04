import React from "react";
import "./NewsPage.css";
import { NavLink, Outlet } from "react-router-dom";

const LayoutNewsPage = () => {
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
              <NavLink to="/news">Все</NavLink>
              <NavLink to="/NewsSport">Спорт</NavLink>
              <NavLink to="/NewsEntertainment">Развлечение</NavLink>
              <NavLink to="/NewsPoster">Афиша</NavLink>
              <NavLink to="/NewsPolicy">Политика</NavLink>
              <NavLink to="/NewsEvent">Мероприятия</NavLink>
              <NavLink to="/NewsEconomy">Экономика</NavLink>
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
