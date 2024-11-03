import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/PathPage/HomePage/HomePage";
import AboutPage from "./components/PathPage/AboutPage/AboutPage";
import NewsPage from "./components/PathPage/NewsPage/NewsPage";
import PortfoiloPage from "./components/PathPage/PortfolioPage/PortfolioPage";
import ContactsPage from "./components/PathPage/ContactsPage/ContactsPage";
import JoinUs from "./components/PathPage/JoinUsPage/JoinPage";
import CoursesPage from "./components/PathPage/CoursesPage/CoursesPage";
import SportLink from "./components/NewsLink/SportLink/SportLink";
import EntertainmentLink from "./components/NewsLink/EntertainmentLink/EntertainmentLink";
import PosterLink from "./components/NewsLink/PosterLink/PosterLink";
import PolicyLink from "./components/NewsLink/PolicyLink/PolicyLink";
import EventLink from "./components/NewsLink/EventLink/EventLink";
import EconomyLink from "./components/NewsLink/EconomyLink/EconomyLink";
import News from "./components/News/News";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="logoHome" element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="portfolio" element={<PortfoiloPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="joinUs" element={<JoinUs />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="AboutTheCompany" element={<AboutPage />} />
          <Route path="sport" element={<SportLink />} />
          <Route path="entertainment" element={<EntertainmentLink />} />
          <Route path="poster" element={<PosterLink />} />
          <Route path="policy" element={<PolicyLink />} />
          <Route path="event" element={<EventLink />} />
          <Route path="economy" element={<EconomyLink />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
