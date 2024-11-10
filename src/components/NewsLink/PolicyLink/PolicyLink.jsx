import React from "react";
import SpeechImage from "../../../../img/Speech.png";
import CambodiaImage from "../../../../img/Cambodia.png";
import ArmyImage from "../../../../img/Army.png";
import WashingtonImage from "../../../../img/Washington.png";
import HungaryImage from "../../../../img/Hungary.png";
import StockImage from "../../../../img/Stock.png";
import BidImage from "../../../../img/Bid.png";
import EconomiImage from "../../../../img/Economi.png";
import "./PolicyLink.css";

const PolicyLink = () => {
  const dataone = [
    {
      id: 1,
      image: CambodiaImage,
      title: "Лукашенко: Беларусь заинтересована...",
      timedate: "09.11.2024",
      text: "Беларусь заинтересована в расширении сотрудничества с Камбоджей. Минск рассматривает как перспективного партнера в регионе Юго-Восточной Азии и стремится к расширению взаимодействия по широкому кругу направлений.",
    },
    {
      id: 2,
      image: SpeechImage,
      title: "Киселев назвал речь...",
      timedate: "09.11.2024",
      text: "Путина на 'Валдае' мощным обращением к миру и к Трампу.'По мнению гендиректора медиагруппы, Трамп должен понять, что 'существуют силы, превосходящие Америку, это сила объективных процессов.",
    },
    {
      id: 3,
      image: ArmyImage,
      title: "МИД РФ: боевики ВСУ...",
      timedate: "08.11.2024",
      text: "Боевики ВСУ используют пленных в Курской области как живой щит.Методы террора стали обыденным явлением и нормой поведения для режима Владимира Зеленского, заявила официальный представитель МИД России Мария Захарова.",
    },
    {
      id: 4,
      image: WashingtonImage,
      title: "Захарова: Вашингтон...",
      timedate: "07.11.2024",
      text: "Вашингтон 'подчищает коррупционные хвосты' на Украине.Администрация действующего лидера США Джо Байден 'подчищает коррупционные хвосты' перед уходом американского лидера с поста, заявила официальный представитель российского МИД.",
    },
  ];
  const datatwo = [
    {
      id: 1,
      image: HungaryImage,
      title: "Орбан: Венгрия...",
      timedate: "06.11.2024",
      text: "Венгрия сохраняет свой подход к конфликту на Украине. Венгерское правительство сохраняет свой миролюбивый подход к украинскому конфликту, несмотря на разногласия с ЕС, заявил по итогам неформального саммита организации премьер-министр Венгрии",
    },
    {
      id: 2,
      image: StockImage,
      title: "Трамп не собирается...",
      timedate: "06.11.2024",
      text: "Трамп не собирается продавать акции своей социальной сети.Победитель президентских выборов в США Дональд Трамп заявил, что не собирается в ближайшее время продавать акции своей социальной сети Truth Social.",
    },
    {
      id: 3,
      image: BidImage,
      title: "Кремль заявил...",
      timedate: "05.11.2024",
      text: "Кремль заявил о готовности к контактам с Трампом.Готовность к контактам с победившим на выборах президента США Дональдом Трампом сохраняется, об этом заявил пресс-секретарь президента РФ",
    },
    {
      id: 4,
      image: EconomiImage,
      title: "Кремль: Москва не ждет...",
      timedate: "05.11.2024",
      text: "Москва не ждет изменений экономической риторики США с приходом Трампа.Россия не ожидает изменений экономической риторики США в отношении Москвы с приходом в Белый дом Дональда Трампа, об этом сказал пресс-секретарь президента РФ.",
    },
  ];

  return (
    <>
      <div className="PolicyLink">
        <div className="container">
          <div className="PolicyLink__container">
            <div className="PolicyLink__title">
              <h1>Политика</h1>
            </div>
            <div className="PolicyLink__cards-wrapper">
              <div className="PolicyLink__card-wrapperone">
                {dataone.map((item, index) => (
                  <div
                    key={index}
                    className="PolicyLink__cards PolicyLink__cards"
                  >
                    <div className="PolicyLink__cards-image card__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="PolicyLink__cards-text">
                      <div className="PolicyLink__cards-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="PolicyLink__cards-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="PolicyLink__cards-timedate card-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="PolicyLink__card-wrappertwo">
                {datatwo.map((item, index) => (
                  <div
                    key={index}
                    className="PolicyLink__cards PolicyLink__cards"
                  >
                    <div className="PolicyLink__cards-image card__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="PolicyLink__cards-text">
                      <div className="PolicyLink__cards-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="PolicyLink__cards-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="PolicyLink__cards-timedate card-timedate">
                        <p>{item.timedate}</p>
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

export default PolicyLink;
