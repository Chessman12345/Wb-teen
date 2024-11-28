import React from "react";
import ReactIcon from "../../../../img/ReactIcon.png";
import FrontendIcom from "../../../../img/FrontEnd.png";
import VueIcon from "../../../../img/Vue.png";
import AngularIcon from "../../../../img/Angular.png";
import NextJsIcon from "../../../../img/NextJs.png";
import TypeScriptIcon from "../../../../img/TypeScript.jpg";
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
      image: VueIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 14 месяцев",
      class: "Webdev__cards Webdev__cards-tree",
      price: "1890",
      discount: "3780",
      permonth: "135",
    },
  ];

  const datatwo = [
    {
      id: 1,
      title: "Курс",
      subtitle: "Frontend Angular Developer",
      image: AngularIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 12 месяцев",
      buttonTextOne: "",
      buttonTextTwo: "",
      class: "Webdev__cards Webdev__cards-four",
      price: "1704",
      discount: "3408",
      permonth: "142",
    },
    {
      id: 2,
      title: "Курс",
      subtitle: "Frontend TypeScript Developer",
      image: TypeScriptIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 15 месяцев",
      class: "Webdev__cards Webdev__cards-five",
      price: "2 640",
      discount: "5 280",
      permonth: "176",
    },
    {
      id: 3,
      title: "Курс",
      subtitle: "Frontend Next.js Developer",
      image: NextJsIcon,
      textListOne: "Помощь в трудоустройстве",
      textListTwo: "Длительность курса 19 месяцев",
      class: "Webdev__cards Webdev__cards-six",
      price: "3 724",
      discount: "7 448",
      permonth: "196",
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
                {datatwo.map((item, index) => (
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
