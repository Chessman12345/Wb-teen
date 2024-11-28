import { useState } from "react";
import Swal from "sweetalert2";
import "./ModalWindow.css";

const ModalWindow = ({ actives, setActives }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dddc778c-32eb-49e1-a457-59266bbfaf18");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Выполнено успешно",
        icon: "success",
      });
      setActives(false);
    }
  };

  return (
    <>
      <div
        className={actives ? "modalWindow activeT" : "modalWindow"}
        onClick={() => setActives(false)}
      >
        <form
          className="modalWindow__content"
          onClick={(e) => e.stopPropagation()}
          onSubmit={onSubmit}
        >
          <h1>Присоедениться к нам</h1>
          <div className="modalWindow__box">
            <label>Введите свое полное имя</label>
            <input
              type="text"
              className="field"
              placeholder="Введите свое имя"
              name="name"
              required
            />
          </div>
          <div className="modalWindow__box">
            <label>Введите gmail/номер телефона</label>
            <input
              type="text"
              className="field"
              placeholder="Введите gmail/phone number"
              name="gmail/number"
              required
            />
          </div>
          <div className="modalWindow__box">
            <label>Ваше сообщение</label>
            <textarea
              placeholder="Введите текст"
              className="field mess"
              name="message"
              required
            ></textarea>
          </div>
          <div className="modalWindow__button">
            <button type="submit">
              <span>Отправить</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalWindow;
