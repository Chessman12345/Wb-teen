import React from "react";
import DollarImage from "../../../../img/Dollar.png";
import HungaryImage from "../../../../img/Hungary.png";
import VenomImage from "../../../../img/Venom.jpg";
import ZooImage from "../../../../img/Zoo.png";
import RunPersonImage from "../../../../img/RunPerson.png";
import { Link } from "react-router-dom";
import "./Links.css";

const Links = () => {
  const dataSport = [
    {
      id: 1,
      imagetwo: RunPersonImage,
      title: "Быстрее, выше, сильнее:",
      timedate: "26.10.2024",
      text: "Спортсмены из Беларуси и России соревнуются на базе областного центра олимпийского резерва. В легкоатлетическую программу для юношей и девушек входят прыжки в длину, забеги на дистанции 60 м, 200 м, 800 м, 1500 м, а также эстафета 4 х 200 м.",
    },
  ];
  const dataIntertainment = [
    {
      id: 1,
      imageone: ZooImage,
      title: "Минский зоопарк организует...",
      timedate: "26.09.2024",
      text: "Минский зоопарк на старый Новый год организует огненно-цирковое шоу.Новый год - единственный праздник в стране, который принято отмечать дважды. В 18.00 приглашаем всех окунуться еще раз в атмосферу прекрасного настроения, веселья и радости, - рассказали в зоопарке",
    },
  ];
  const dataPoster = [
    {
      id: 1,
      imageone: VenomImage,
      Name: "Venom: The Last Dance",
      Country: "Великобритания, Мексика, США",
      Year: "2024",
      Directors: "Келли Марсел",
      Cast: "Аланна Юбак, Джуно Темпл, Кларк Бако, Рис Иванс, Стивен Грэм, Том Харди, Чиветель Эджиофор",
      PremiereDate: "26 октября 2024",
      AgeLimit: "16+",
      Genre: "Боевик, Приключения, Триллер, Фантастика",
    },
  ];
  const dataPolicy = [
    {
      id: 1,
      image: HungaryImage,
      title: "Орбан: Венгрия...",
      timedate: "06.11.2024",
      text: "Венгрия сохраняет свой подход к конфликту на Украине. Венгерское правительство сохраняет свой миролюбивый подход к украинскому конфликту, несмотря на разногласия с ЕС, заявил по итогам неформального саммита организации премьер-министр Венгрии",
    },
  ];
  const dataEconomy = [
    {
      id: 1,
      image: DollarImage,
      title: "Доллар подешевел...",
      timedate: "05.11.2024",
      text: "Доллар подешевел перед большими выходными. Отечественный рубль укрепился по отношению к доллару и юаню на торгах в среду, свидетельствуют данные Белорусской валютно-фондовой биржи.",
    },
  ];

  return (
    <>
      <div className="Blocks__container">
        <div className="Blocks__title">
          <h1>Все категории</h1>
        </div>
        <div className="Blocks__wrapper">
          <div className="Block__row">
            <div className="block">
              <div className="block__title">
                <Link to="/Links/NewsSport">Спорт</Link>
              </div>
              <div className="block__content">
                {dataSport.map((item, index) => (
                  <div key={index} className="Sport__cards block__card">
                    <div className="Sport__cards-image Links__image">
                      <img src={item.imagetwo} alt="" />
                    </div>
                    <div className="Sport__cards-text">
                      <div className="Sport__cards-title Links-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="Sport__cards-text Links-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="Sport__cards-timedate Links-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="block__title">
                <Link to="/Links/NewsEntertainment">Развлечение</Link>
              </div>
              <div className="block__content">
                {dataIntertainment.map((item, index) => (
                  <div key={index} className="Intertainment__cards block__card">
                    <div className="Intertainment__cards-image Links__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="Intertainment__cards-text">
                      <div className="Intertainment__cards-title Links-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="Intertainment__cards-text Links-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="Intertainment__cards-timedate Links-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Block__row">
            <div className="block">
              <div className="block__title">
                <Link to="/Links/NewsEconomy">Экономика</Link>
              </div>
              <div className="block__content">
                {dataEconomy.map((item, index) => (
                  <div key={index} className="Economy__cards block__card">
                    <div className="Economy__cards-image Links__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="Economy__cards-text">
                      <div className="Economy__cards-title Links-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="Economy__cards-text Links-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="Economy__cards-timedate Links-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="block__title">
                <Link to="/Links/NewsPolicy">Политика</Link>
              </div>
              <div className="block__content">
                {dataPolicy.map((item, index) => (
                  <div key={index} className="Policy__cards block__card">
                    <div className="Policy___cards-image Links__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="Policy___cards-text">
                      <div className="Policy___cards-title Links-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="Policy___cards-text Links-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="Policy___cards-timedate Links-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Block__row-posters">
            <div className="Block__poster">
              <div className="Block__poster-title">
                <Link to="Links/NewsPoster">Афиша</Link>
              </div>
              <div className="Block__poster-content">
                {dataPoster.map((item, index) => (
                  <div key={index} className="Poster__cards">
                    <div className="Poster__cards-image Postercard__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="Poster__cards-text">
                      <div className="Poster__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="Poster__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
