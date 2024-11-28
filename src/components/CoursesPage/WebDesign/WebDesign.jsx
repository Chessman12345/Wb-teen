import React from "react";
import TildaIMage from "../../../../img/Tilda.png";
import WebDesignFigmaImage from "../../../../img/WebDesign.png";
import UXUIdesignIcon from "../../../../img/UXUIdesign.jpg";
import "./WebDesign.css";

const WebDesign = () => {
  const dataone = [
    {
      id: 1,
      title: "Курс",
      subtitle: "Figma Design",
      image: WebDesignFigmaImage,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 4 месяцев",
      class: "WebDes__cards WebDes__cards-one",
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
      class: "WebDes__cards WebDes__cards-two",
      discount: "1944",
      price: "972",
      permonth: "108",
    },
    {
      id: 2,
      title: "Курс",
      subtitle: "UX/UI-дизайнер",
      image: UXUIdesignIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 7 месяцев",
      class: "WebDes__cards WebDes__cards-tree",
      price: "721",
      discount: "1442",
      permonth: "103",
    },
  ];

  return (
    <>
      <div className="WebDes">
        <div className="container">
          <div className="WebDes__container">
            <div className="WebDes__title">
              <h1>Веб-дизайн</h1>
            </div>
            <div className="wrapper">
              <div className="WebDes__cards-wrapper">
                {dataone.map((item, index) => (
                  <div key={index} className={item.class}>
                    <div className="Webdev__title-part">
                      <div className="Webdev__title-part-text">
                        <div className="Webdev__title-part-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="Webdev__title-part-subtitle">
                          <h3>{item.subtitle}</h3>
                        </div>
                      </div>
                      <div className="Webdev__title-part-image">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="Webdev__subtitle-part">
                      <div className="Webdev__subtitle-part-list">
                        <ul>
                          <li>{item.textListOne}</li>
                          <li>{item.textListTwo}</li>
                        </ul>
                      </div>
                      <div className="Webdev__subtitle-part-price">
                        <div className="Webdev__subtitle-part-price-discount">
                          <p>
                            <span>{item.discount}</span> BYN
                          </p>
                          <p>{item.price} BYN</p>
                        </div>
                        <div className="Webdev__subtitle-part-price-permonth">
                          <h1>{item.permonth}</h1>
                          <h4>BYN/мес.</h4>
                        </div>
                        <div className="Webdev__subtitle-part-price-payment">
                          <p>Первый платеж через 1 месяц</p>
                        </div>
                      </div>
                      <div className="Webdev__subtitle-part-button">
                        <button>
                          <span>Записаться</span>
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
    </>
  );
};
export default WebDesign;
