import React from "react";

const HeroContact = () => {
  return (
    <section id="contact-hero__section">
      <div className="container contact-hero__content">
        <div className="contact-hero__input-box">
          <input
            type="text"
            placeholder="Ismingiz"
            className="contact-hero__input-email"
          />
          <input
            type="text"
            placeholder="Email pochtangiz"
            className="contact-hero__input-name"
          />
          <input
            type="text"
            placeholder="Telefon raqamingiz"
            className="contact-hero__input-tell"
          />
          <textarea
            id=""
            name=""
            rows="8"
            cols="60"
            className="contact-hero__input-textarea"
            placeholder="Xabaringizni yozib qoldiring"
          ></textarea>
          <button className="contact-hero__input-btn">Yuborish</button>
        </div>
        <div className="contact-hero__text-box">
          <h1 className="contact-hero__text-title">Kontakt ma’lumotlari</h1>
          <p className="contact-hero__text-subtitle">
            Quyidagi ma’lumotlar orqali biz bilan oson bog‘lanishingiz mumkin
          </p>
          <p className="contact-hero__text-email">deltagroup@gmail.com</p>
          <p className="contact-hero__text-tell">+998 (90) 123-45-67</p>
          <div className="contact-hero__text-social">
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>{" "}
            <a href="">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>{" "}
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
