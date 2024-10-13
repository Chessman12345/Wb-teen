import { useState } from "react";
import Html from "../../../img/html.png";
import Ux from "../../../img/UxUl.png";
import Figma from "../../../img/figma.png";
import React from "../../../img/react.png";
import Angular from "../../../img/angular.png";
import Vue from "../../../img/vue.png";
import Frontend from "../../../img/frontend.png";
import TypeScript from "../../../img/typescript.png";
import "./courses.css";

const Courses = () => {
  const data = [
    {
      id: 1,
      text: "Професия",
      title: "Верстальщик",
      image: Html,
      subtitle: "3мес.",
      class: "courses_cards-one",
    },
    {
      id: 2,
      text: "Професия",
      title: "UX/UI-дизайнер",
      image: Ux,
      subtitle: "11мес.",
      class: "courses_cards-two",
    },
    {
      id: 3,
      text: "Професия",
      title: "Веб-дизайнер",
      image: Figma,
      subtitle: "10мес.",
      class: "courses_cards-tree",
    },
    {
      id: 4,
      text: "Професия",
      title: "Junior React Frontend Developer",
      image: React,
      subtitle: "18мес.",
      class: "courses_cards-four",
    },
    {
      id: 5,
      text: "Професия",
      title: "Junior Angular Frontend Developer",
      image: Angular,
      subtitle: "14мес.",
      class: "courses_cards-five",
    },
    {
      id: 6,
      text: "Професия",
      title: "Junior Vue Frontend Developer",
      image: Vue,
      subtitle: "14мес.",
      class: "courses_cards-six",
    },
    {
      id: 7,
      text: "Професия",
      title: "Frontend Developer",
      image: Frontend,
      subtitle: "9мес.",
      class: "courses_cards-seven",
    },
    {
      id: 8,
      text: "Професия",
      title: "Junior TypeScript Developer",
      image: TypeScript,
      subtitle: "10мес.",
      class: "courses_cards-eight",
    },
  ];

  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="courses__container">
            <div className="courses__title">
              <h1>Курсы</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
