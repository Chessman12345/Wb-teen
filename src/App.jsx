import { useState } from "react";
import Nav from "./components/leftNav/Nav";
import Header from "./components/header/Header";
// import Courses from "./components/courses/Courses";
import "./App.css";
import Courses from "./components/courses/Сourses";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Courses />
    </>
  );
}

export default App;
