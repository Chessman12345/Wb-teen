import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/PathPage/HomePage/HomePage";
import AboutPage from "./components/PathPage/AboutPage/AboutPage";
import PortfoiloPage from "./components/PathPage/PortfolioPage/PortfolioPage";
import ContactsPage from "./components/PathPage/ContactsPage/ContactsPage";
import JoinUs from "./components/PathPage/JoinUsPage/JoinPage";
import CoursesPage from "./components/PathPage/CoursesPage/CoursesPage";
import SportLink from "./components/NewsLink/SportLink/SportLink";
import EntertainmentLink from "./components/NewsLink/EntertainmentLink/EntertainmentLink";
import PosterLink from "./components/NewsLink/PosterLink/PosterLink";
import PolicyLink from "./components/NewsLink/PolicyLink/PolicyLink";
import EconomyLink from "./components/NewsLink/EconomyLink/EconomyLink";
import Links from "./components/NewsLink/Links/Links";
import LayoutNewsPage from "./components/PathPage/NewsPage/LayoutNewsPage";
import AllLinkCoursesPage from "./components/CoursesPage/AllLink/AllLink";
import WebDesignCoursesPage from "./components/CoursesPage/WebDesign/WebDesign";
import WebDevCoursesPage from "./components/CoursesPage/WebDev/WebDev";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  const [allCoursesCardsWebDev, setAllCoursesCardsWebDev] = React.useState([]);
  const [allCoursesCardsWebDes, setAllCoursesCardsWebDes] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5173/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setAllCoursesCardsWebDev(json.AllLinkCoursesCardsWebDev);
        setAllCoursesCardsWebDes(json.AllLinkCoursesCardsWebDes);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="logoHome" element={<HomePage />} />
          <Route path="portfolio" element={<PortfoiloPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="joinUs" element={<JoinUs />} />
          <Route path="AboutTheCompany" element={<AboutPage />} />
          <Route path="sport" element={<SportLink />} />
          <Route path="entertainment" element={<EntertainmentLink />} />
          <Route path="poster" element={<PosterLink />} />
          <Route path="policy" element={<PolicyLink />} />
          <Route path="economy" element={<EconomyLink />} />
          <Route path="/" element={<LayoutNewsPage />}>
            <Route index element={<LayoutNewsPage />} />
            <Route path="Links" element={<Links />} />
            <Route path="Links/NewsSport" element={<SportLink />} />
            <Route
              path="Links/NewsEntertainment"
              element={<EntertainmentLink />}
            />
            <Route path="Links/NewsPoster" element={<PosterLink />} />
            <Route path="Links/NewsPolicy" element={<PolicyLink />} />
            <Route path="Links/NewsEconomy" element={<EconomyLink />} />
          </Route>
          <Route path="/" element={<CoursesPage />}>
            <Route index element={<CoursesPage />} />
            <Route
              path="Courses"
              element={
                <AllLinkCoursesPage
                  allCoursesCardsWebDev={allCoursesCardsWebDev}
                  allCoursesCardsWebDes={allCoursesCardsWebDes}
                />
              }
            />
            <Route
              path="Courses/WebDevelopment"
              element={<WebDevCoursesPage />}
            />
            <Route
              path="Courses/WebDesign"
              element={<WebDesignCoursesPage />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
