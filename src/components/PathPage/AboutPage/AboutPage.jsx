import { useState } from "react";
import FlagGif from "../../../../img/flag.gif";
import ModalWindow from "./ModalWindow/ModalWindow";
import "./AboutPage.css";

const AboutPage = () => {
  const [modalActives, setModalActives] = useState(false);

  return (
    <>
      <section className="AboutPage">
        <div className="container">
          <div className="AboutPage__container">
            <div className="AboutPage__title">
              <h1>О компании</h1>
            </div>
            <div className="AboutPage__wrapper">
              <div className="AboutPage__text">
                <div className="AboutPage__text-wrapper">
                  <h2 className="AboutPage__text-title">О сервисе «Wb-teen»</h2>
                  <p className="AboutPage__text-subtitle">
                    <span>8 сентября 2024 года</span> — день рождения проекта
                    «Wb-teen». Сервис стремительно растёт как по числу довольных
                    пользователей, так и тем возможностям, которые он открывает
                    для SEO-специалистов и фронтенд разработчиков. <br />
                    <br /> Активное развитие системы позволяет предлагать всем
                    пользователям проекта самые современные инструменты
                    автоматизации процессов продвижения сайта и существенно
                    увеличивать производительность работ.
                  </p>
                  <button
                    className="AboutPage__text-button"
                    onClick={() => setModalActives(true)}
                  >
                    <span> Присоединяйтесь к нам</span>
                  </button>
                </div>
              </div>
              <div className="AboutPage__blocks">
                <div className="AboutPage__blocks-block block__one"></div>
                <div className="AboutPage__blocks-block block__two"></div>
                <div className="AboutPage__blocks-block block__tree"></div>
                <img className="AboutPage__blocks-image" src={FlagGif} alt="" />
              </div>
            </div>
            <div className="AboutPage__subtitle-section-wrapper">
              <div className="AboutPage__subtitle-section">
                <div className="AboutPage__subtitle-section-block block-one">
                  <h2>42</h2>
                  <p>
                    Пользователей <br />
                    системы
                  </p>
                </div>
                <div className="AboutPage__subtitle-section-block block-two">
                  <h2>12</h2>
                  <p>Инструментов для профессионалов</p>
                </div>
                <div className="AboutPage__subtitle-section-block block-tree">
                  <h2>Бесконечно!</h2>
                  <p>
                    Развитие <br />
                    проекта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalWindow actives={modalActives} setActives={setModalActives} />
    </>
  );
};

export default AboutPage;
