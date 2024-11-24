import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./CoursesPage.css";

const CoursesPage = () => {
  const OnClick = (e) => {
    let links = document.querySelectorAll(".CoursesPage__link-active");
    if (e.target.classList.contains("CoursesPage__link-active")) {
      links.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
    }
  };

  return (
    <>
      <section className="CoursesPage">
        <div className="container">
          <div className="CoursesPage__container">
            <div className="CoursesPage__title">
              <h1>Новости</h1>
            </div>
          </div>
          <div className="CoursesPage__nav-wrapper">
            <nav className="CoursesPage__nav" onClick={OnClick}>
              <li>
                <Link
                  to="/Courses"
                  className="CoursesPage__link-active link__active active"
                >
                  Все
                </Link>
              </li>
              <li>
                <Link
                  to="/Courses/WebDevelopment"
                  className="CoursesPage__link-active"
                >
                  Веб-разработка
                </Link>
              </li>
              <li>
                <Link
                  to="/Courses/WebDesign"
                  className="CoursesPage__link-active"
                >
                  Веб-дизайн
                </Link>
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

export default CoursesPage;
