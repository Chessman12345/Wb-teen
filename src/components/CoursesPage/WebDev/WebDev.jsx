import React from "react";
import ReactIcon from "../../../../img/ReactIcon.png";
import FrontendIcom from "../../../../img/FrontEnd.png";
import "./WebDev.css";

const WebDev = () => {
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
      class: "Webdev__cards Webdev__cards-one",
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
      class: "Webdev__cards Webdev__cards-two",
      price: "1800",
      discount: "3600",
      permonth: "150",
    },
    {
      id: 3,
      title: "Курс",
      subtitle: "Frontend Vue Developer",
      image: ReactIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 14 месяцев",
      class: "Webdev__cards Webdev__cards-tree",
      price: "1890",
      discount: "3780",
      permonth: "135",
    },
  ];

  return (
    <>
      <div className="Webdev">
        <div className="container">
          <div className="Webdev__container">
            <div className="Webdev__title">
              <h1>Веб-разработка</h1>
            </div>
            <div className="wrapper">
              <div className="Webdev__cards-wrapper">
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
              <div className="Webdev__cards-wrapper">
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

export default WebDev;
