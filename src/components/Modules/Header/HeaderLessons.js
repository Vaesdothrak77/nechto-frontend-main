import { Link } from "react-router-dom";
import buttonback from '../../../img/buttonback.png'
import logo from '../../../img/logo-whitesvg.svg'
import play from '../../../img/play.png'
import bg from '../../../img/video.png'

function HeaderLessons() {
  return (
    <div className="headerlessons" style={{ backgroundImage: `url(${bg})` }}>
      <div className="headerlessons__header">
        <Link to='/'>
          <img className="headerlessons__back" src={buttonback} alt="" />
        </Link>
        <img className="headerlessons__logo" src={logo} alt="" />
      </div>
      <img className="headerlessons__play" src={play} alt="" />


    </div>
  );
}

export default HeaderLessons;
