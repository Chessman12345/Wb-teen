import { useState } from "react";
import Header from "../header/Header";
import Courses from "../courses/Сourses";
import News from "../News/News";

function HomePage() {
  return (
    <>
      <Header />
      <Courses />
      <News />
    </>
  );
}

export default HomePage;
