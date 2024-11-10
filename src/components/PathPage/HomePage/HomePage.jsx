import { useState } from "react";
import Header from "../../header/Header";
import Courses from "../../courses/Сourses";
import News from "../../News/News";
import Portfolio from "../../portfolio/Portfolio";
import Nav from "../../Nav/Nav";
import { Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* <Nav /> */}
      <Header />
      <Courses />
      <News />
      <Portfolio />
    </>
  );
}

export default HomePage;
