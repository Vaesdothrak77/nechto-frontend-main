import logo from '../../../img/nechto.svg'
import backplay from "../../../img/black-play.svg"
import { Link } from "react-router-dom";

function HeaderModules() {
  return (
    <div className='header__modules'>
      <Link to='/'>
        <img className="header__logo_modules" src={logo} />
      </Link>
      <Link to='/'><img className='black-play' src={backplay}/></Link>
    </div>
  );
}

export default HeaderModules;
