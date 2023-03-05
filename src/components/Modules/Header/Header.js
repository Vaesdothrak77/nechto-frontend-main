import logo from '../../../img/nechto.svg'
import bigpic from '../../../img/bigHeaderImg.png'
import smollpic from '../../../img/smolHeaderImg.png'
import style from "../Header/style.css"

function Header() {
  return (
    <div className='header'>
      <div className="header__position">
        <img className="header__smolpic" src={smollpic} />
        <img className="header__bigpic" src={bigpic} />
      </div>
      <img className="header__logo" src={logo} />
    </div>
  );
}

export default Header;
