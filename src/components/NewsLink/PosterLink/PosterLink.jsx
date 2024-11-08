import React from "react";
import VenomImage from "../../../../img/Venom.jpg";
import BagmanImage from "../../../../img/Bagman.jpg";
import ParrotImage from "../../../../img/Parrot.jpg";
import DogImage from "../../../../img/Dog.jpg";
import TimeToLiveImage from "../../../../img/TimeToLive.webp";
import NewsYearImage from "../../../../img/NewYear.jpg";
import "./PosterLink.css";

const PosterLink = () => {
  const dataone = [
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
  const datatwo = [
    {
      id: 1,
      imageone: BagmanImage,
      Name: "Bagman",
      Country: "США",
      Year: "2024",
      Directors: "Колм МакКарти",
      Cast: "Аделл Леонс, Антония Томас, Стивен Кри, Сэм Клафлин, Уильям Хоуп",
      PremiereDate: "23 августа 2024",
      AgeLimit: "16+",
      Genre: "Ужасы",
    },
  ];
  const datatree = [
    {
      id: 1,
      imageone: ParrotImage,
      Name: "Возвращение попугая Кеши",
      Country: "Россия",
      Year: "2024",
      Directors: "Олег Асадулин",
      Cast: "Ефим Шифрин, Ирина Безряднова, Марк Юсеф, Никита Кологривый, Оксана Акиньшина",
      PremiereDate: "31 октября 2024",
      AgeLimit: "6+",
      Genre: "Детский/Семейный, Комедия",
    },
  ];
  const datafour = [
    {
      id: 1,
      imageone: DogImage,
      Name: "Поймай собаку, если сможешь",
      Country: "Россия",
      Year: "2024",
      Directors: "Анна Курбатова",
      Cast: "Антон Богданов, Дмитрий Хрусталев, Константин Крюков, Наталья Чистякова-Ионова",
      PremiereDate: "7 ноября 2024",
      AgeLimit: "12+",
      Genre: "Комедия, Приключения",
    },
  ];
  const datafive = [
    {
      id: 1,
      imageone: TimeToLiveImage,
      Name: "We Live in Time",
      Country: "Великобритания, Франция",
      Year: "2024",
      Directors: "Джон Краули",
      Cast: "Грэйс Делани, Ифа Хайндс, Флоренс Пью, Эндрю Гарфилд",
      PremiereDate: "31 октября 2024",
      AgeLimit: "16+",
      Genre: "Мелодрама",
    },
  ];
  const datasix = [
    {
      id: 1,
      imageone: NewsYearImage,
      Name: "Новый год в Березовке",
      Country: "Россия",
      Year: "2024",
      Directors: "Ольга Ланд",
      Cast: "Алексей Шевченков, Анна Уколова, Гурам Гогия, Дмитрий Нагиев, Марк Богатырев",
      PremiereDate: "14 ноября 2024",
      AgeLimit: "12+",
      Genre: "Детский/Семейный, Комедия",
    },
  ];

  return (
    <>
      <div className="PosterLink">
        <div className="container">
          <div className="PosterLink__container">
            <div className="PosterLink__title">
              <h1>Афиша</h1>
            </div>
            <div className="PosterLink__cards-wrapper">
              <div className="PosterLink__card-wrapper">
                {dataone.map((item, index) => (
                  <div key={index} className="PosterLink__cards">
                    <div className="PosterLink__cards-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="PosterLink__cards-text">
                      <div className="PosterLink__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="PosterLink__card-wrapper">
                {datatwo.map((item, index) => (
                  <div key={index} className="PosterLink__cards">
                    <div className="PosterLink__cards-text">
                      <div className="PosterLink__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                    <div className="PosterLink__cards-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="PosterLink__card-wrapper">
                {datatree.map((item, index) => (
                  <div key={index} className="PosterLink__cards">
                    <div className="PosterLink__cards-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="PosterLink__cards-text">
                      <div className="PosterLink__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="PosterLink__card-wrapper">
                {datafour.map((item, index) => (
                  <div key={index} className="PosterLink__cards">
                    <div className="PosterLink__cards-text">
                      <div className="PosterLink__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                    <div className="PosterLink__cards-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="PosterLink__card-wrapper">
                {datafive.map((item, index) => (
                  <div
                    key={index}
                    className="PosterLink__cards PosterLink__cards"
                  >
                    <div className="PosterLink__cards-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="PosterLink__cards-text">
                      <div className="PosterLink__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="PosterLink__card-wrapper">
                {datasix.map((item, index) => (
                  <div
                    key={index}
                    className="PosterLink__cards PosterLink__cards"
                  >
                    <div className="PosterLink__cards-text">
                      <div className="PosterLink__cards-joint card-name">
                        <p>
                          <span>Оригинальное название: </span>
                          {item.Name}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Country">
                        <p>
                          <span>Страна: </span>
                          {item.Country}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Year">
                        <p>
                          <span>Год: </span>
                          {item.Year}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Directors">
                        <p>
                          <span>Режиссеры: </span>
                          {item.Directors}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Cast">
                        <p>
                          <span>В ролях: </span>
                          {item.Cast}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-PremiereDate">
                        <p>
                          <span>Дата премьеры: </span>
                          {item.PremiereDate}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-AgeLimit">
                        <p>
                          <span>Возрастное ограничение: </span>
                          {item.AgeLimit}
                        </p>
                      </div>
                      <div className="PosterLink__cards-joint card-Genre">
                        <p>
                          <span>Жанр: </span>
                          {item.Genre}
                        </p>
                      </div>
                    </div>
                    <div className="PosterLink__cards-image card__image">
                      <img src={item.imageone} alt="" />
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

export default PosterLink;
