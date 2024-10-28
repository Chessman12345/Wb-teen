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
import "./news.css";

const News = () => {
  const data = [
    {
      id: 1,
      img: Sport,
      title: "Спорт",
      class: "news__slider-cards news_cards-one",
    },
    {
      id: 2,
      img: Entertainment,
      title: "Развлечение",
      class: "news__slider-cards news_cards-two",
    },
    {
      id: 3,
      img: Poster,
      title: "Афиша",
      class: "news__slider-cards news_cards-tree",
    },
    {
      id: 4,
      img: Policy,
      title: "Политика",
      class: "news__slider-cards news_cards-four",
    },
    {
      id: 5,
      img: Event,
      title: "Мероприятия",
      class: "news__slider-cards news_cards-five",
    },
    {
      id: 6,
      img: Economy,
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
                    <div key={index} id="slider__boxes" className={item.class}>
                      <div className="news__slider-title-part">
                        <img
                          src={item.img}
                          className="news__slider-title-part-title"
                        ></img>
                      </div>
                      <div className="news__slider-subtitle-part">
                        <div className="news__slider-subtitle-part-title">
                          <a href="#">
                            <h1>{item.title}</h1>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="news__subtitle-link">
              <a href="#">Все новости</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
