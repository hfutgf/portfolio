import React from "react";
import { Link } from "react-router-dom";
import ln from "../../assets/img/ln.png";
import insta from "../../assets/img/instagram.png";
import telegram from "../../assets/img/telegram.webp";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myworks">My works</Link>
        </li>
      </ul>
      <div className="messengers">
        <a href="https://www.linkedin.com/in/jasurbek-mansuraliev-a10223248">
          <img src={ln} alt="ln-icon" width={30} />
        </a>
        <a href="https://www.instagram.com/jasurbek_mansuraliev/">
          <img src={insta} alt="insta-icon" width={30} />
        </a>
        <a href="https://t.me/Jasurbek_Mansuraliyev">
          <img src={telegram} alt="telegram-icon" width={30} />
        </a>
      </div>
    </div>
  );
};

export default Header;
