import square from "../../../img/square.PNG";
import style from "../Guests/style.css";

import { Link } from "react-router-dom";
import HeaderModules from "../Header/HeaderModules";

const Guests = () => {
  return (
    <div className="gests__hight">
    <HeaderModules />
      <div className="guests__container">
        <h2 className="guests__title">гости</h2>
        <div className="guests__info">
          <div className="guests__info-item">
            <Link to="/subpage" style={{ textDecoration: "none" }}>
              <div className="guests__info-name">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <p className="info-name">Имя гостя</p>
              </div>
            </Link>
            <Link to="/subpage" style={{ textDecoration: "none" }}>
              <div className="guests__info-name">
                <div className="guest__image">
                  <img src={square} />
                </div>
                <p className="info-name">Оченьдлинноимя Крайнедлиннофам...</p>
              </div>
            </Link>
            <Link to="/subpage" style={{ textDecoration: "none" }}>
              <div className="guests__info-name">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <p className="info-name">Имя гостя</p>
              </div>
            </Link>
            <Link to="/subpage" style={{ textDecoration: "none" }}>
              <div className="guests__info-name">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <p className="info-name">Имя гостя</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
