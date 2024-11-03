import { useState } from "react";
import Header from "../../header/Header";
import Courses from "../../courses/Сourses";
import News from "../../News/News";
import Portfolio from "../../portfolio/Portfolio";

function HomePage() {
  return (
    <>
      <Header />
      <Courses />
      <News />
      <Portfolio />
    </>
  );
}

export default HomePage;
