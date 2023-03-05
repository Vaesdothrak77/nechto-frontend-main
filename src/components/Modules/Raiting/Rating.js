
import avatar from '../../../img/avatar.png'
import style from "../Raiting/style.css"

function Rating() {
  return (
    <div className="rating">
      <h2 className="rating__title">рейтинг участников</h2>
      <div className="rating__cards">
        <div className="rating__card">
          <div className="rating__card_profile">
            <img className='rating__card_avatar' src={avatar} alt="" />
            <p className='rating__card_title'>Катя Процик</p>
          </div>
          <p className='rating__card_result'>3900</p>
        </div>
        <div className="rating__card">
          <div className="rating__card_profile">
            <img className='rating__card_avatar' src={avatar} alt="" />
            <p className='rating__card_title'>Катя Процик</p>
          </div>
          <p className='rating__card_result'>3900</p>
        </div>
        <div className="rating__card">
          <div className="rating__card_profile">
            <img className='rating__card_avatar' src={avatar} alt="" />
            <p className='rating__card_title'>Катя Процик</p>
          </div>
          <p className='rating__card_result'>3900</p>
        </div>
        <div className="rating__card">
          <div className="rating__card_profile">
            <img className='rating__card_avatar' src={avatar} alt="" />
            <p className='rating__card_title'>Катя Процик</p>
          </div>
          <p className='rating__card_result'>3900</p>
        </div>
        <div className="rating__card">
          <div className="rating__card_profile">
            <img className='rating__card_avatar' src={avatar} alt="" />
            <p className='rating__card_title'>Катя Процик</p>
          </div>
          <p className='rating__card_result'>3900</p>
        </div>
        <div className="rating__card">
          <div className="rating__card_profile">
            <img className='rating__card_avatar' src={avatar} alt="" />
            <p className='rating__card_title'>Катя Процик</p>
          </div>
          <p className='rating__card_result'>3900</p>
        </div>
      </div>
    </div>
  );
}

export default Rating;