import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Html from "../../../img/html.png";
import Ux from "../../../img/UxUl.png";
import Figma from "../../../img/figma.png";
import React from "../../../img/react.png";
import Angular from "../../../img/angular.png";
import Vue from "../../../img/vue.png";
import Frontend from "../../../img/frontend.png";
import TypeScript from "../../../img/typescript.png";
import "./courses.cards.css";
import "./courses.css";

const Courses = () => {
  const data = [
    {
      id: 1,
      text: "Курс",
      title: "Верстальщик",
      image: Html,
      subtitle: "3мес.",
      class: "courses__slider-cards courses_cards-one",
    },
    {
      id: 2,
      text: "Курс",
      title: "Веб-дизайнер",
      image: Figma,
      subtitle: "10мес.",
      class: "courses__slider-cards courses_cards-two",
    },
    {
      id: 3,
      text: "Курс",
      title: "React Developer",
      image: React,
      subtitle: "18мес.",
      class: "courses__slider-cards courses_cards-tree",
    },
    {
      id: 4,
      text: "Курс",
      title: "Frontend Developer",
      image: Frontend,
      subtitle: "9мес.",
      class: "courses__slider-cards courses_cards-four",
    },
    {
      id: 5,
      text: "Курс",
      title: "TypeScript Developer",
      image: TypeScript,
      subtitle: "10мес.",
      class: "courses__slider-cards courses_cards-five",
    },
    {
      id: 6,
      text: "Все курсы",
      class: "courses__slider-cards courses_cards-six",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="courses__container">
            <div className="courses__title">
              <h1>Курсы</h1>
            </div>
            <div className="courses__slider-container">
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div className="courses__slider-cards-inner">
                    <div key={index} id="slider__boxes" className={item.class}>
                      <div className="courses__slider-title-part">
                        <div className="courses__slider-title">
                          <h4>
                            <a href="#">{item.text}</a>
                          </h4>
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                      <div className="courses__slider-subtitle-part">
                        <h5>{item.subtitle}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
