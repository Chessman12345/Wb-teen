import { useState } from "react";
import CoursesModalWindow from "../CoursesModalWindow/CoursesModalWindow";
import "./AllLink.css";

const AllLink = ({ allCoursesCardsWebDev, allCoursesCardsWebDes }) => {
  const [activeModal, setActiveModal] = useState(false);
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
                  {allCoursesCardsWebDev.map((item, index) => (
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
                          <button
                            id="WebDev"
                            onClick={() => setActiveModal(true)}
                            className="AllLink__subtitle-button"
                          >
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
                    {allCoursesCardsWebDes.map((item, index) => (
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
                            <button
                              onClick={() => setActiveModal(true)}
                              id="WebDes"
                              className="AllLink__subtitle-button"
                            >
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
        <CoursesModalWindow
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </div>
    </>
  );
};

export default AllLink;
