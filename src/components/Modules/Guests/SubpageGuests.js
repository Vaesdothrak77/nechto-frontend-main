import { Link } from "react-router-dom";
import buttonback from "../../../img/buttonback.png";
import logo from "../../../img/logo-whitesvg.svg";
import play from "../../../img/play.png";
import bg from "../../../img/video.png";

const SubpageGuests = () => {
  return (
    <>
      <div className="headerlessons" style={{ backgroundImage: `url(${bg})` }}>
        <div className="headerlessons__header">
          <Link to="/">
            <img className="headerlessons__back" src={buttonback} alt="" />
          </Link>
          <img className="headerlessons__logo" src={logo} alt="" />
        </div>
        <img className="headerlessons__play" src={play} alt="" />
      </div>

      <div className="guests__name-block">
        <p className="guests__name">Имя гостя</p>
        <p className="guests__description">описание</p>
      </div>

      <div className="button__centr guests-btn">
        <Link to="/">
          <button className="home__button">на главную</button>
        </Link>
      </div>
    </>
  );
};

export default SubpageGuests;
