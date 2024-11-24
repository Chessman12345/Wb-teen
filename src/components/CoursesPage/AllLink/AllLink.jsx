import React from "react";
import ReactIcon from "../../../../img/ReactIcon.png";
import FrontendIcom from "../../../../img/FrontEnd.png";
import TildaIMage from "../../../../img/Tilda.png";
import WebDesignFigmaImage from "../../../../img/WebDesign.png";
import "./AllLink.css";

const AllLink = () => {
  const dataone = [
    {
      id: 1,
      title: "Курс",
      subtitle: "Frontend Developer",
      image: FrontendIcom,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 12 месяцев",
      buttonTextOne: "",
      buttonTextTwo: "",
      class: "AllLink__cards AllLink__cards-one",
      price: "1680",
      discount: "3360",
      permonth: "140",
    },
    {
      id: 2,
      title: "Курс",
      subtitle: "Frontend React Developer",
      image: ReactIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 16 месяцев",
      class: "AllLink__cards AllLink__cards-two",
      price: "1800",
      discount: "3600",
      permonth: "150",
    },
  ];

  const datatwo = [
    {
      id: 1,
      title: "Курс",
      subtitle: "Figma Design",
      image: WebDesignFigmaImage,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 4 месяцев",
      class: "AllLink__cards AllLink__cards-tree",
      price: "460",
      discount: "920",
      permonth: "115",
    },
    {
      id: 2,
      title: "Курс",
      subtitle: "Tilda Design",
      image: TildaIMage,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 9 месяцев",
      class: "AllLink__cards AllLink__cards-four",
      price: "972",
      discount: "1944",
      permonth: "108",
    },
  ];

  return (
    <>
      <div className="AllLink">
        <div className="container">
          <div className="AllLink__container">
            <div className="AllLink__title">
              <h1>Все курсы</h1>
            </div>
            <div className="wrapper">
              <div className="AllLink__card-wrapper">
                <div className="AllLink__cards-wrapper-title">
                  <h1>Веб-разработка</h1>
                </div>
                <div className="AllLink__cards-wrapper">
                  {dataone.map((item, index) => (
                    <div key={index} className={item.class}>
                      <div className="AllLink__title-part">
                        <div className="AllLink__title-part-text">
                          <div className="AllLink__title-part-title">
                            <p>{item.title}</p>
                          </div>
                          <div className="AllLink__title-part-subtitle">
                            <h3>{item.subtitle}</h3>
                          </div>
                        </div>
                        <div className="AllLink__title-part-image">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className="AllLink__subtitle-part">
                        <div className="AllLink__subtitle-part-list">
                          <ul>
                            <li>{item.textListOne}</li>
                            <li>{item.textListTwo}</li>
                          </ul>
                        </div>
                        <div className="AllLink__subtitle-part-price">
                          <div className="AllLink__subtitle-part-price-discount">
                            <p>
                              <span>{item.discount}</span> BYN
                            </p>
                            <p>{item.price} BYN</p>
                          </div>
                          <div className="AllLink__subtitle-part-price-permonth">
                            <h1>{item.permonth}</h1>
                            <h4>BYN/мес.</h4>
                          </div>
                          <div className="AllLink__subtitle-part-price-payment">
                            <p>Первый платеж через 1 месяц</p>
                          </div>
                        </div>
                        <div className="AllLink__subtitle-part-button">
                          <button>
                            <span>Записаться</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="AllLink__design-wrapper">
                <div className="AllLink__card-wrapper">
                  <div className="AllLink__cards-wrapper-title">
                    <h1>Веб-дизайн</h1>
                  </div>
                  <div className="AllLink__cards-wrapper">
                    {datatwo.map((item, index) => (
                      <div key={index} className={item.class}>
                        <div className="AllLink__title-part">
                          <div className="AllLink__title-part-text">
                            <div className="AllLink__title-part-title">
                              <p>{item.title}</p>
                            </div>
                            <div className="AllLink__title-part-subtitle">
                              <h3>{item.subtitle}</h3>
                            </div>
                          </div>
                          <div className="AllLink__title-part-image">
                            <img src={item.image} alt="" />
                          </div>
                        </div>
                        <div className="AllLink__subtitle-part">
                          <div className="AllLink__subtitle-part-list">
                            <ul>
                              <li>{item.textListOne}</li>
                              <li>{item.textListTwo}</li>
                            </ul>
                          </div>
                          <div className="AllLink__subtitle-part-price">
                            <div className="AllLink__subtitle-part-price-discount">
                              <p>
                                <span>{item.discount}</span> BYN
                              </p>
                              <p>{item.price} BYN</p>
                            </div>
                            <div className="AllLink__subtitle-part-price-permonth">
                              <h1>{item.permonth}</h1>
                              <h4>BYN/мес.</h4>
                            </div>
                            <div className="AllLink__subtitle-part-price-payment">
                              <p>Первый платеж через 1 месяц</p>
                            </div>
                          </div>
                          <div className="AllLink__subtitle-part-button">
                            <button>
                              <span className="button__span">Записаться</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLink;
