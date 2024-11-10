import React from "react";
import "./Links.css";

const Links = () => {
  const dataSport = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const dataIntertainment = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const dataPoster = [
    {
      id: 1,
    },
  ];
  const dataPolicy = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const dataEconomy = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return (
    <>
      <div className="Blocks__container">
        <div className="Blocks__title">
          <h1>Все категории</h1>
        </div>
        <div className="Blocks__wrapper">
          <div className="Block__row">
            <div className="block">
              <div className="block__title">
                <h2>Спорт</h2>
              </div>
              <div className="block__content"></div>
            </div>
            <div className="block">
              <div className="block__title">
                <h2>Развлечение</h2>
              </div>
              <div className="block__content"></div>
            </div>
          </div>
          <div className="Block__row">
            <div className="block">
              <div className="block__title">
                <h2>Экономика</h2>
              </div>
              <div className="block__content"></div>
            </div>
            <div className="block">
              <div className="block__title">
                <h2>Политика</h2>
              </div>
              <div className="block__content"></div>
            </div>
          </div>
          <div className="Block__row-posters">
            <div className="Block__poster">
              <div className="Block__poster-title">
                <h2>Афиша</h2>
              </div>
              <div className="Block__poster-content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
