import React from "react";
import Slider from "react-slick";
import WbTeenImage from "../../../img/WbTeenScrin.png";
import LaslesImage from "../../../img/laslesScrin.png";
import PortfolioImage from "../../../img/PortfolioScrin.png";
import NFSImage from "../../../img/NfsScrin.png";
import DinoImage from "../../../img/DinoScrin.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      img: WbTeenImage,
      href: "https://wb-teen.vercel.app/",
      title: "Wb-teen",
      subtitle:
        "Эта работа была сделана для отрабоки навыков. В этом проекти использовались технологие такие как: React, Css , а так же тут использовались библеотеки такие как:React-Router-Dom, React Slick, SweetAlert2, Web3Forms для более простой верстки. ",
      gitlink: "https://github.com/Chessman12345/Wb-teen",
    },
    {
      id: 2,
      img: LaslesImage,
      href: "https://lasles-vpn-neon-alpha.vercel.app/",
      title: "LaslesVpn",
      subtitle:
        "Эта работа была сделана для отрабоки навыков. В этом проекти использовались технологие такие как: React, Css. Эта страница была рассчитана на быструю верстку , но она была сверстана за полтара часа , но эта страница недоделана до конца да бы не выгореть. ",
      gitlink: "https://github.com/Chessman12345/LaslesVpn",
    },
    {
      id: 3,
      img: PortfolioImage,
      href: "https://chessman12345.github.io/Portfolio/",
      title: "Portfolio",
      subtitle:
        "Эта работа была сделана примерно 6меясцев назад, для того что бы люди могли увидить мои знания и умения.В этом проекти использовались технологие такие как: Html, Css, JS. На этой странице есть смена тем со светлой на темную , и с темной на светлую.",
      gitlink: "https://github.com/Chessman12345/Portfolio",
    },
    {
      id: 4,
      img: NFSImage,
      href: " https://chessman12345.github.io/NFT/",
      title: "NFT",
      subtitle:
        "Эта первая работа , которая на тот момент казалась не по силе. Закончив эту работу я стал уверенне в своих навыках. Этот сайт про NFT. В этом проекти использовались технологие такие как: Html, Css, JS.",
      gitlink: "https://github.com/Chessman12345/NFT",
    },
    {
      id: 5,
      img: DinoImage,
      href: "https://chessman12345.github.io/DinoGame/",
      title: "DinoGame",
      subtitle:
        "Эта работа была сделана для отрабоки навыков. Эта мини игра полностью написана на JavaScript и Css. Игра писалась на протяженнии пяти дней. После написания этой игра все выучиные навыки по JS закрепились на сто процентов.",
      gitlink: "https://github.com/Chessman12345/DinoGame",
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
      <section className="portfolio">
        <div className="container">
          <div className="portfolio__container">
            <div className="portfolio__title">
              <h1>Портфолио</h1>
            </div>
            <div className="potfolio__slider-container">
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div className="portfolio__slider-cards-inner">
                    <div
                      key={index}
                      id="slider__boxes"
                      className="portfolio__slider-cards"
                    >
                      <div className="portfolio__slider-title-part">
                        <div className="portfolio__slider-title-part-image">
                          <img src={item.img} />
                        </div>
                      </div>
                      <div className="portfolio__slider-subtitle-part">
                        <div className="portfolio__slider-subtitle-part-title">
                          <h2>
                            <a href={item.href}>{item.title}</a>
                          </h2>
                        </div>
                        <div className="portfolio__slider-subtitle-part-subtitle">
                          <p>{item.subtitle}</p>
                        </div>
                        <div className="portfolio__slider-subtitle-part-gitlink">
                          <p>
                            GitHub: <a href={item.gitlink}>клик</a>
                          </p>
                        </div>
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
export default Portfolio;
