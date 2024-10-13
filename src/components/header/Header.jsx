import { useState } from "react";
import "./header.css";
import Headerimg from "../../../img/header image.svg";
import Modal from "../modal/Modal";

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__title">
            <h2>
              Компания специальзируется на обучении студентов frontend
              разработке
            </h2>
            <p>Главная ценность компании - наши ученики</p>
            <button onClick={() => setModalActive(true)}>
              Присоедениться к нам
            </button>
          </div>
          <Modal active={modalActive} setActive={setModalActive} />
          <div className="header__image">
            <img src={Headerimg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
