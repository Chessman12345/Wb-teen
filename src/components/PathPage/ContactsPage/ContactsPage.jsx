import React from "react";
import ContactImageIt from "../../../../img/ContactImageIt.webp";
import "./ContactsPage.css";

const ContactsPage = () => {
  return (
    <>
      <section className="ContactsPage">
        <div className="container">
          <div className="ContactsPage__container">
            <div className="ContactsPage__title">
              <h1>Контакты</h1>
            </div>
            <div className="ContactsPage__container-map">
              <div className="ContactsPage__container-map-title">
                <h2>Речицкий проспект, 80, БЦ Славия, 4 этаж, г. Гомель</h2>
                <p>
                  Остановка «Улица Косарева», со стороны Речицкого проспекта:
                  автобусы: 16, 16а, 17, 26, 33. <br /> <br />
                  Остановка «Гипермаркет «Гиппо»: автобусы 2, 2а, 21, 25, 40,
                  42. Троллейбусы: 3, 12, 14, 19, 20, 25
                </p>
                <img src={ContactImageIt} />
              </div>
              <div className="ContactsPage__container-map-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.084355122691!2d30.91625639422534!3d52.40514737261772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d443ef8452f065%3A0x4c08243f3caad37b!2z77iPIO-4jyBJVGVlbiBBY2FkZW15IC0g0J7QsdGA0LDQt9C-0LLQsNGC0LXQu9GM0L3Ri9C5INGG0LXQvdGC0YAg0LTQu9GPINC00LXRgtC10Lkg0Lgg0L_QvtC00YDQvtGB0YLQutC-0LIg0LIg0JPQvtC80LXQu9C1!5e0!3m2!1sru!2sby!4v1733570211891!5m2!1sru!2sby"></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
