// import Slider from 'react-slick';
import pict from "../../../img/module.png";
import { Link } from "react-router-dom";
import style from "../LessonsInfo/style.css";

function LessonsInfo() {
  return (
    <>
      <div className="lessons">
        <div className="lessons__padding">
          <h3 className="lessons__title">урок 1</h3>
          <h2 className="lessons__subtitle">Информация о курсе и знакомство</h2>
          <p className="lessons__text">
            Не только знакомство со мной и моим проектом, но и самая важная
            информация о сроках курса, датах выхода новых уроков и форматах
            обратной связи.
          </p>
        </div>
      </div>
      <div className="lessons__materials">
        <h1 className="material__title">доп.материалы</h1>
      </div>
      <div className="modules__overflow">
        <div className="modules__card">
          <Link to="/module1">
            <img className="modules__image" src={pict} alt="" />
          </Link>
          <img className="modules__image" src={pict} alt="" />
          <div className="modules__water"></div>
        </div>
      </div>
    </>
  );
}

export default LessonsInfo;
