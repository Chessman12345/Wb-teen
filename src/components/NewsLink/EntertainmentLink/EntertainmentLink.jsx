import React from "react";
import CospleyImage from "../../../../img/Cospley.png";
import EveningImage from "../../../../img/Evening.png";
import AttractionsImage from "../../../../img/Attractions.png";
import NationalDayImage from "../../../../img/NationalDay.png";
import SeriesImage from "../../../../img/Series.png";
import FilmImage from "../../../../img/Film.png";
import ChristmasTreeImage from "../../../../img/ChristmasTree.png";
import ZooImage from "../../../../img/Zoo.png";
import "./EntertainmentLink.css";

const EntertainmentLink = () => {
  const dataone = [
    {
      id: 1,
      imageone: CospleyImage,
      title: "Косплей-выставка проходит в Минске",
      timedate: "14.09.2024",
      text: "13-15 сентября в Минске проходит необычная выставка-конвент UniCon&GameExpо, где можно оказаться в центре сцены любимого фильма или игры и встретить косплей любимого персонажа.",
    },
    {
      id: 2,
      imageone: EveningImage,
      title: "Как провести субботний вечер в Минске",
      timedate: "13.08.2024",
      text: "В Минске продолжается летний музыкально-туристический сезон, сообщает БЕЛТА.Концерт состоится в прекрасное время, когда можно сполна насладиться природой, отдохнуть, расслабиться, послушать пение птиц.",
    },
    {
      id: 3,
      imageone: AttractionsImage,
      title: "В Минске проведут дополнительное...",
      timedate: "05.11.2024",
      text: "В Минске проведут дополнительное обследование аттракционов, сообщили БЕЛТА в пресс-службе Мингорисполкома.В субботу в столичном парке им. Челюскинцев сломался аттракцион 'Лебеди'.Все аттракционы после сезонного хранения проходят обязательную проверку.",
    },
    {
      id: 4,
      imageone: NationalDayImage,
      title: "Куда сходить с малышами...",
      timedate: "16.10.2024",
      text: "Куда сходить с малышами в Международный день защиты детей. Ряд культурных мероприятий, пройдет в Минске 1 июня. Своей целью ставим познакомить детей с музыкой Римского-Корсакова и с поэзией Пушкина. Это будет детская опера для семейного просмотра.",
    },
  ];
  const datatwo = [
    {
      id: 1,
      imageone: SeriesImage,
      title: "Выходные с восточным колоритом:",
      timedate: "13.08.2024",
      text: "'Постучись в мою дверь' Турецкий романтический сериал, ставший культовым. Юная девушка, решившая отомстить бизнесмену, в одночасье становится его невестой.",
    },
    {
      id: 2,
      imageone: FilmImage,
      title: "Уже на VOKA:",
      timedate: "20.09.2024",
      text: "Уже на VOKA: премьера новых эпизодов мультсериала 'Марыля. У пошуках дзіўнікаў' состоялась в Минске.В столичном кинопространстве moon состоялась премьера новых эпизодов оригинального мультсериала видеосервиса VOKA 'Марыля. У пошуках дзіўнікаў'",
    },
    {
      id: 3,
      imageone: ChristmasTreeImage,
      title: "Нарядиться и спеть частушку.",
      timedate: "01.11.2024",
      text: "Яркое действо развернется сегодня на площади Ленина в праздничном городке еды. Здесь с 18.00 до 20.00 можно будет бесплатно получить сладкое угощение от объектов общественного питания, рассказал мэр.",
    },
    {
      id: 4,
      imageone: ZooImage,
      title: "Минский зоопарк организует...",
      timedate: "26.09.2024",
      text: "Минский зоопарк на старый Новый год организует огненно-цирковое шоу.Новый год - единственный праздник в стране, который принято отмечать дважды. В 18.00 приглашаем всех окунуться еще раз в атмосферу прекрасного настроения, веселья и радости, - рассказали в зоопарке",
    },
  ];

  return (
    <>
      <div className="EntertainmentLink">
        <div className="container">
          <div className="EntertainmentLink__container">
            <div className="EntertainmentLink__title">
              <h1>Развлечение</h1>
            </div>
            <div className="EntertainmentLink__cards-wrapper">
              <div className="EntertainmentLink__card-wrapperone">
                {dataone.map((item, index) => (
                  <div
                    key={index}
                    className="EntertainmentLink__cardsone EntertainmentLink__cards"
                  >
                    <div className="EntertainmentLink__cardsone-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="EntertainmentLink__cards-text">
                      <div className="EntertainmentLink__cardsone-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="EntertainmentLink__cardsone-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="EntertainmentLink__cardsone-timedate card-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="EntertainmentLink__card-wrappertwo">
                {datatwo.map((item, index) => (
                  <div
                    key={index}
                    className="EntertainmentLink__cardstwo EntertainmentLink__cards"
                  >
                    <div className="EntertainmentLink__cardstwo-image card__image">
                      <img src={item.imageone} alt="" />
                    </div>
                    <div className="EntertainmentLink__cards-text">
                      <div className="EntertainmentLink__cardstwo-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="EntertainmentLink__cardstwo-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="EntertainmentLink__cardstwo-timedate card-timedate">
                        <p>{item.timedate}</p>
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

export default EntertainmentLink;
