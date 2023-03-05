import { Link } from "react-router-dom";
import folderIcon from '../../../../img/folder-mini.png'

function AbstractButton() {
  return (
    <div className="abstract button__centr">

      <button className="abstract__button">
        <img className="abstract__img" src={folderIcon} alt="" />
        <Link to="/books" style={{textDecoration: 'none'}} className="books-link">конспект</Link>
      </button>
    </div>
  );
}

export default AbstractButton;