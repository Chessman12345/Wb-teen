import { useState } from "react";
import Swal from "sweetalert2";
import "./CoursesModalWindow.css";

const CoursesModalWindow = ({ activeModal, setActiveModal }) => {
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
      setActiveModal(false);
    }
  };

  return (
    <>
      <div
        className={
          activeModal ? "CoursesModalWindow activeT" : "CoursesModalWindow"
        }
        onClick={() => setActiveModal(false)}
      >
        <form
          className="CoursesModalWindow__content"
          onClick={(e) => e.stopPropagation()}
          onSubmit={onSubmit}
        >
          <h1 className="ModalWindow__title"></h1>
        </form>
      </div>
    </>
  );
};

export default CoursesModalWindow;
