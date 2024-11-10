import React from "react";
import SalaryImage from "../../../../img/Salary.png";
import FloodImage from "../../../../img/Flood.png";
import AgreementImage from "../../../../img/Agreement.png";
import ProductImage from "../../../../img/Product.png";
import MonyeImage from "../../../../img/Monye.png";
import CarImage from "../../../../img/Car.png";
import DollarImage from "../../../../img/Dollar.png";
import SafeImage from "../../../../img/Safe.png";
import "./EconomyLink.css";

const EconomyLink = () => {
  const dataone = [
    {
      id: 1,
      image: SalaryImage,
      title: "Белстат: зарплата...",
      timedate: "09.11.2024",
      text: "Зарплата каждого четвертого работника превышает 2,5 тысячи рублей. арплаты росли в прошлом году и растут в нынешнем, заявила зампредседателя Национального статистического комитета Беларуси (Белстат), 'У нас достигнут тот уровень заработной платы, которого мы предполагали достичь…'",
    },
    {
      id: 2,
      image: FloodImage,
      title: "Чехия оценила...",
      timedate: "09.11.2024",
      text: "Чехия оценила в 2 миллиона евро ущерб от наводнения в сентябре. Власти Чехии оценили приблизительную сумму ущерба, который был нанесен в результате наводнений в сентябре, сообщают местные СМИ.",
    },
    {
      id: 3,
      image: AgreementImage,
      title: "Минск и Манагуа создадут...",
      timedate: "08.11.2024",
      text: "Минск и Манагуа создадут комиссию по торгово-экономическому сотрудничествуБеларусь и Никарагуа создадут совместную комиссию по торгово-экономическому сотрудничеству, соответствующее соглашение между странами опубликовано на Национальном правовом интернет-портале в субботу..",
    },
    {
      id: 4,
      image: ProductImage,
      title: "Лукашенко: в России...",
      timedate: "07.11.2024",
      text: "Лукашенко: в России хороший спрос на белорусскую продукцию. Хороший спрос есть на продовольственную продукцию из Беларуси на рынке РФ, заявил президент Беларуси Александр Лукашенко. Глава государства в субботу принимает участие на празднике 'Дажынкі' в Полоцке.",
    },
  ];
  const datatwo = [
    {
      id: 1,
      image: MonyeImage,
      title: "Рекорд продаж...",
      timedate: "06.11.2024",
      text: "Рекорд продаж новых автомобилей поставлен в Беларуси.Реализация новых легковых автомобилей в октябре 2024 года выросла более чем в два раза по сравнению с октябрем 2023-го, сообщили в Белорусской автомобильной ассоциации (БАА).",
    },
    {
      id: 2,
      image: CarImage,
      title: "Наливайко: в Беларуси...",
      timedate: "06.11.2024",
      text: "Наливайко: в Беларуси порядка 1,2 тысячи владельцев люксовых авто. Владельцев люкс-авто в Беларуси насчитывается порядка 1,2 тысячи человек, сообщил министр по налогам и сборам Сергей Наливайко в эфире News.by.",
    },
    {
      id: 3,
      image: DollarImage,
      title: "Доллар подешевел...",
      timedate: "05.11.2024",
      text: "Доллар подешевел перед большими выходными. Отечественный рубль укрепился по отношению к доллару и юаню на торгах в среду, свидетельствуют данные Белорусской валютно-фондовой биржи.",
    },
    {
      id: 4,
      image: SafeImage,
      title: "ЗВР Беларуси...",
      timedate: "05.11.2024",
      text: "ЗВР Беларуси выросли за октябрь почти на один процент. Золотовалютные резервы приросли за октябрь примерно на 0,85% до суммы около 8,93 млрд в долларовом эквиваленте, следует из данных Нацбанка.",
    },
  ];

  return (
    <>
      <div className="EconomyLink">
        <div className="container">
          <div className="EconomyLink__container">
            <div className="EconomyLink__title">
              <h1>Экономика</h1>
            </div>
            <div className="EconomyLink__cards-wrapper">
              <div className="EconomyLink__card-wrapperone">
                {dataone.map((item, index) => (
                  <div
                    key={index}
                    className="EconomyLink__cards EconomyLink__cards"
                  >
                    <div className="EconomyLink__cards-image card__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="EconomyLink__cards-text">
                      <div className="EconomyLink__cards-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="EconomyLink__cards-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="EconomyLink__cards-timedate card-timedate">
                        <p>{item.timedate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="EconomyLink__card-wrappertwo">
                {datatwo.map((item, index) => (
                  <div
                    key={index}
                    className="EconomyLink__cards EconomyLink__cards"
                  >
                    <div className="EconomyLink__cards-image card__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="EconomyLink__cards-text">
                      <div className="EconomyLink__cards-title card-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="EconomyLink__cards-text card-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="EconomyLink__cards-timedate card-timedate">
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

export default EconomyLink;
