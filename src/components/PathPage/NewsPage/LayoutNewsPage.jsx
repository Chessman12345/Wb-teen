import React from "react";
import "./NewsPage.css";
import { NavLink, Outlet } from "react-router-dom";

const LayoutNewsPage = () => {
  const OnClick = (e) => {
    let links = document.querySelectorAll(".NewsPage__link-active");
    if (e.target.classList.contains("NewsPage__link-active")) {
      links.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
    }
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
            <nav className="NewsPage__nav" onClick={OnClick}>
              <li>
                <NavLink to="/Links" className="NewsPage__link-active">
                  Все
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Links/NewsSport"
                  className="NewsPage__link-active"
                >
                  Спорт
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Links/NewsEntertainment"
                  className="NewsPage__link-active"
                >
                  Развлечение
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Links/NewsPoster"
                  className="NewsPage__link-active"
                >
                  Афиша
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Links/NewsPolicy"
                  className="NewsPage__link-active"
                >
                  Политика
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Links/NewsEconomy"
                  className="NewsPage__link-active"
                >
                  Экономика
                </NavLink>
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
