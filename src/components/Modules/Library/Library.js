import avatarIcon from '../../../img/avatar-icons.png'
import bookIcon from '../../../img/book-icon.png'
import folderIcon from '../../../img/folder-icon.png'
import playIcon from '../../../img/play-icons.png'
import style from "../Library/style.css"

import { Link } from 'react-router-dom'

function Library() {
  return (
    <div className="library">
      <h2 className="library__title">библиотека</h2>
      <div className="library__cards">
        <div className="library__card">
          <img className="library__card_img" src={bookIcon} alt="" />
          <Link to='/books' style={{textDecoration: 'none'}}><p className="library__card_text" >Книги и статьи </p></Link>
        </div>
        <div className="library__card">
          <img className="library__card_img" src={folderIcon} alt="" />
          <Link to='/addfile' style={{textDecoration: 'none'}}><p className="library__card_text" >Доп. файлы</p></Link>
        </div>
        <div className="library__card">
          <img className="library__card_img" src={playIcon} alt="" />
          <Link to='/video' style={{textDecoration: 'none'}}><p className="library__card_text">Леции и фильмы</p></Link>
        </div>
        <div className="library__card">
          <img className="library__card_img" src={avatarIcon} alt="" />
          <Link to='/guests' style={{textDecoration: 'none'}}><p className="library__card_text" >Гости</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Library;
