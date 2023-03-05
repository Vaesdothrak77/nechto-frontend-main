import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <div className="button__centr">
      <Link to='/'><button className="home__button">на главную</button></Link>
    </div>
  );
}

export default HomeButton;