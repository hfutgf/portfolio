import React from "react";
import "./MyWorks.scss";
import pizza from "../../assets/img/pizza.png";

const MyWorks = () => {
  return (
    <div className="root-works">
      <div className="info">
        <h2>info</h2>
        <p>info</p>
      </div>
      <div className="works">
        <div className="work">
          <div className="left-section">
            <h3>Pizza</h3>
            <p>Сделано смотря на видео за 20 дней первый реал проект,
              было проктировано (ReduxToolik, TypeScript)
            </p>
            <a href="https://pizza-prak.netlify.app/">Перейти</a>
          </div>
          <div className="right-section">
            <img src={pizza} alt="pizza-img" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
