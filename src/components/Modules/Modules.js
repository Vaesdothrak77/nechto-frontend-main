import module from "../../img/module.png";
import { Link } from "react-router-dom";

function Modules() {
  return (
    <div className="modules">
      <div className="season__month">
        <h2 className="modules__title">сезон</h2>
        <select className="select-month" name="Month" id="">
          <option value="asd">янв-мар</option>
          <option value="asd">янв-мар</option>
          <option value="asd">янв-мар</option>
          <option value="asd">янв-мар</option>
        </select>
      </div>
      <div className="modules__overflow">
        <div className="modules__card">
          <Link to="/module1">
            <img className="modules__image" src={module} alt="" />
          </Link>
          <img className="modules__image" src={module} alt="" />
          <div className="modules__water"></div>
        </div>
      </div>
    </div>
  );
}

export default Modules;
