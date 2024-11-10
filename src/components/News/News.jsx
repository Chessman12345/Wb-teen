import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sport from "../../../img/sport.png";
import Entertainment from "../../../img/Entertainment.png";
import Poster from "../../../img/Poster.png";
import Policy from "../../../img/Policy.png";
import Event from "../../../img/Event.png";
import Economy from "../../../img/Economy.png";
import { Link } from "react-router-dom";
import "./news.css";

const News = () => {
  const data = [
    {
      id: 1,
      img: Sport,
      path: "/Links/NewsSport",
      title: "Спорт",
      class: "news__slider-cards news_cards-one",
    },
    {
      id: 2,
      img: Entertainment,
      path: "/Links/NewsEntertainment",
      title: "Развлечение",
      class: "news__slider-cards news_cards-two",
    },
    {
      id: 3,
      img: Poster,
      path: "/Links/NewsPoster",
      title: "Афиша",
      class: "news__slider-cards news_cards-tree",
    },
    {
      id: 4,
      img: Policy,
      path: "/Links/NewsPolicy",
      title: "Политика",
      class: "news__slider-cards news_cards-four",
    },
    {
      id: 5,
      img: Event,
      path: "/Links/NewsEvent",
      title: "Мероприятия",
      class: "news__slider-cards news_cards-five",
    },
    {
      id: 6,
      img: Economy,
      path: "/Links/NewsEconomy",
      title: "Экономика",
      class: "news__slider-cards news_cards-six",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <main>
        <section className="news">
          <div className="container">
            <div className="news__container">
              <div className="news__title">
                <h1>Новости</h1>
              </div>
              <div className="news__slider-container">
                <Slider {...settings}>
                  {data.map((item, index) => (
                    <div className="news__slider-cards-inner">
                      <div
                        key={index}
                        id="slider__boxes"
                        className={item.class}
                      >
                        <div className="news__slider-title-part">
                          <img
                            src={item.img}
                            className="news__slider-title-part-title"
                          ></img>
                        </div>
                        <div className="news__slider-subtitle-part">
                          <div className="news__slider-subtitle-part-title">
                            <Link
                              className="news__slider-subtitle-part-title-link"
                              to={item.path}
                            >
                              <h1>{item.title}</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="news__subtitle-link">
                <Link to="/news">Все новости</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
