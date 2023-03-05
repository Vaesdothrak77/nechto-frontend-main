
import square from "../../../img/square.PNG";

import { Link } from "react-router-dom";
import HeaderModules from "../Header/HeaderModules";

const VideoGuests = () => {
  return (
    <>
        <HeaderModules />
      <div className="video__guests-container">
        <h2 className="guests__title">видео</h2>
        <div className="guests__info">
          <div className="video-item">
            <Link to="/videosub" style={{ textDecoration: "none" }}>
              <div className="guests__info-namevideo descript-border">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <div className="discription__container">
                  <p className="guests__info-namevideo">название</p>
                  <p className="info-name-description">Описание</p>
                </div>
              </div>
            </Link>
            <Link to="/videosub" style={{ textDecoration: "none" }}>
              <div className="guests__info-namevideo descript-border">
                <div className="guest__image">
                  <img src={square} />
                </div>
                <div className="discription__container">
                  <p className="guests__info-namevideo">название</p>
                  <p className="info-name-description">Описание</p>
                </div>
              </div>
            </Link>
            <Link to="/videosub" style={{ textDecoration: "none" }}>
              <div className="guests__info-namevideo">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <div className="discription__container">
                  <p className="info-name_name">название</p>
                  <p className="info-name-description">
                    Описание которое на пару строк затянулось
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/videosub" style={{ textDecoration: "none" }}>
              <div className="guests__info-namevideo">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <div className="discription__container">
                  <p className="info-name_name">название</p>
                  <p className="info-name-description">Описание</p>
                </div>
              </div>
            </Link>
            <Link to="/videosub" style={{ textDecoration: "none" }}>
              <div className="guests__info-namevideo">
                <div className="guest__image">
                  <img src={square} alt="square" />
                </div>
                <div className="discription__container">
                  <p className="info-name_name">название</p>
                  <p className="info-name-description">Описание</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGuests;
