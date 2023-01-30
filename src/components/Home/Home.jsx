import React from "react";
import iam from "../../assets/img/iam.png";
import Resume from "../../assets/doc/Jasurbek.docx"
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="left-select">
        <h2>Jasurbek Mansuraliev</h2>
        <p>Добро пожаловать на мой сайт портфолио</p>
        <a href={Resume} download>
          Resume
        </a>
      </div>
      <div className="right-select">
        <img src={iam} alt="iam-img" width={400} />
      </div>
    </div>
  );
};

export default Home;
