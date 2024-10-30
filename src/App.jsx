import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/PathPage/AboutPage/AboutPage";
import Homepage from "./components/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="company" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
