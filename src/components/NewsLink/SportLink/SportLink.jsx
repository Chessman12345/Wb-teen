import React from "react";
import RiceImage from "../../../../img/Ris.png";
import LionImage from "../../../../img/Lion.png";
import DeerImage from "../../../../img/Deer.png";
import StorkWithBundleImage from "../../../../img/StorkWithBundle.png";
import HorseImage from "../../../../img/horse.png";
import FlowerImage from "../../../../img/Flower.png";
import BisonImage from "../../../../img/Bison.png";
import BycyclImage from "../../../../img/Bycycl.png";
import RunPersonImage from "../../../../img/RunPerson.png";
import GagarinImage from "../../../../img/Gagarin.png";
import JudoImage from "../../../../img/Judo.png";
import footbalImage from "../../../../img/footbal.png";
import HockeyImage from "../../../../img/Hockey.png";
import GandBolImage from "../../../../img/GandBol.png";
import BoxImage from "../../../../img/Box.png";
import "./SportLink.css";

const SportLink = () => {
  const dataone = [
    {
      id: 1,
      imagetwo: footbalImage,
      title: "Сборная Беларуси по мини-футболу",
      timedate: "05.11.2024",
      text: "4 ноября, сборная Беларуси по мини-футболу сыграла вничью с хозяевами - 3:3. У наших соотечественников забили игроки гомельского ВРЗ Алексей Пинчук, Дмитрий Шимановский и Юрий Дубков.",
    },
    {
      id: 2,
      imagetwo: JudoImage,
      title: "На чемпионате Беларуси по дзюдо",
      timedate: "06.11.2024",
      text: "Соревнования собрали в Минске 175 сильнейших дзюдоистов со всей страны. Спортсмены разыграли медали в 14 весовых категориях (по семь у мужчин и женщин), а также определили сильнейших в командном первенстве.",
    },
    {
      id: 3,
      imagetwo: HockeyImage,
      title: "Минское Динамо дома проиграло",
      timedate: "05.11.2024",
      text: "Динамо проиграло Витязю со счетом 1:4. Единственную шайбу Зубров забил Сэм Энас. У противника отличились Фредерик Готье, Андрей Чивилев, Сергей Калинин и Дмитрий Бучельников.",
    },
    {
      id: 4,
      imagetwo: RunPersonImage,
      title: "Быстрее, выше, сильнее:",
      timedate: "26.10.2024",
      text: "Спортсмены из Беларуси и России соревнуются на базе областного центра олимпийского резерва. В легкоатлетическую программу для юношей и девушек входят прыжки в длину, забеги на дистанции 60 м, 200 м, 800 м, 1500 м, а также эстафета 4 х 200 м.",
    },
  ];
  const datatwo = [
    {
      id: 1,
      imagetwo: BoxImage,
      title: "В Гомеле прошли соревнования",
      timedate: "28.08.2024",
      text: "В Гомеле прошли соревнования, посвященные Дню бокса.Гостями мероприятия стали заместитель директора ГОЦОР единоборств Наталья Якубенко, заместитель председателя областной федерации бокса Павел Потипко и директор СДЮШОР «Омега 2019» Александр Калеев.",
    },
    {
      id: 2,
      imagetwo: GandBolImage,
      title: "Гандболистки 'Гомеля' разошлись...",
      timedate: "20.10.2024",
      text: "Гандболистки 'Гомеля' разошлись миром с 'БНТУ-БелАЗ. Это была первая встреча принципиальных соперниц в этом сезоне.Матч прошел в нашем областном центре во Дворце игровых видов спорта.'Гомель' и 'БНТУ-БелАЗ' сыграли вничью - 26:26 (13:12).",
    },
    {
      id: 3,
      imagetwo: GagarinImage,
      title: "Космический прыжок в ХХI век.",
      timedate: "18.10.2024",
      text: "18 октября 1968 года на Олимпиаде в Мехико произошло событие, сравнимое с полетом Юрия Гагарина в космос. Американский легкоатлет разбежался и прыгнул. Прыгнул так далеко, что длины рельса, на котором была установлена специальная система замера результатов, оказалось недостаточно.",
    },
    {
      id: 4,
      imagetwo: BycyclImage,
      title: "Два белоруса стали...",
      timedate: "26.09.2024",
      text: "Два белоруса стали призерами российской велогонки. В групповой гонке на 170 километров призовые места заняли сразу два наших соотечественника. Евгений Соболь стал вторым, а Сергей Шевченко - третьим. Оба спортсмена представляют велоклуб 'Минск'. Победу праздновал россиянин Петр Рикунов.",
    },
  ];
  return (
    <>
      <div className="SportLink">
        <div className="container">
          <div className="SportLink__container">
            <div className="SportLink__title">
              <h1>Спорт</h1>
            </div>
            <div className="SportLink__cards-wrapper">
              <div className="SportLink__card-wrapperone">
                {dataone.map((item, index) => (
                  <div
                    key={index}
                    className="SportLink__cardsone SportLink__cards"
                  >
                    <div className="SportLink__cardsone-image card__image">
                      <img src={item.imageone} alt="" />
                      <img src={item.imagetwo} alt="" />
                    </div>
                    <div className="SportLink__cards-text">
                      <div className="SportLink__cardsone-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="SportLink__cardsone-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="SportLink__cardsone-timedate card-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="SportLink__card-wrappertwo">
                {datatwo.map((item, index) => (
                  <div
                    key={index}
                    className="SportLink__cardstwo SportLink__cards"
                  >
                    <div className="SportLink__cardstwo-image card__image">
                      <img src={item.imageone} alt="" />
                      <img src={item.imagetwo} alt="" />
                    </div>
                    <div className="SportLink__cards-text">
                      <div className="SportLink__cardstwo-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="SportLink__cardstwo-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="SportLink__cardstwo-timedate card-timedate">
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

export default SportLink;
