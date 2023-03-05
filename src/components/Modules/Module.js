import lesson1 from '../../img/Урок.png'
import lesson2 from '../../img/Урок-1.png'
import lesson3 from '../../img/Урок-2.png'
import lesson4 from '../../img/Урок-3.png'
import { Link } from "react-router-dom";

function Module() {
  return (
    <div className="module">
      <h2 className="library__title">модуль 1</h2>
      <div className="module__cards">
        <Link to='/lessons1'>
          <img className="module__card_img" src={lesson1} alt="" />
        </Link>
        <img className="module__card_img" src={lesson2} alt="" />
        <img className="module__card_img" src={lesson3} alt="" />
        <img className="module__card_img" src={lesson4} alt="" />
      </div>
    </div>
  );
}

export default Module;
