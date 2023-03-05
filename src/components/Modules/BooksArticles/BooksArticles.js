import HeaderModules from "../Header/HeaderModules"
import style from "../../Modules/BooksArticles/style.css"

const BooksArticles = () => {
  return (
    <div className="booksArtic__container">
    <HeaderModules/>
      <h2 className="article-title">статьи</h2>
      <div className="articles__container">
        <article className="articles-item">Название статьи</article>
        <article className="articles-item">Название статьи</article>
        <article className="articles-item">Название статьи</article>
        <article className="articles-item">Название статьи</article>
        <article className="articles-item">Название статьи</article>
      </div>

      <div className="books-section">
        <div className="books-title">книги</div>
        <div className="books__items">
          <div className="books__item">
            <div className="books__item-header">
              <div className="books__content">
                <h3 className="books__header-title">Молчаливый пациент</h3>
                <p className="books__author">Автор: Алекс Михаэлидис</p>
              </div>
              <div className="books__image"></div>
            </div>
            <div className="books__text">
              <p className="text__books">
                Описание: "Молчаливый пациент" - это психологический триллер,
                рассказывающий историю Алисии Беренсон, известной художницы,
                которая была осуждена за убийство своего мужа, а затем вообще
                перестала говорить. Тео Фабер, психотерапевт, очарован случаем
                Алисии и берется за дело, пытаясь заставить ее снова говорить.
                Роман представляет собой извилистую, напряженную поездку, в
                которой исследуются темы любви, одержимости и темные уголки
                человеческой психики. Это перелистывание страниц, которое
                заставит читателей гадать до самого конца.
              </p>
            </div>
          </div>
          <div className="books__item">
            <div className="books__item-header">
              <div className="books__content">
                <h3 className="books__header-title">Молчаливый пациент</h3>
                <p className="books__author">Автор: Алекс Михаэлидис</p>
              </div>
              <div className="books__image"></div>
            </div>
            <div className="books__text">
              <p className="text__books">
                Описание: "Молчаливый пациент" - это психологический триллер,
                рассказывающий историю Алисии Беренсон, известной художницы,
                которая была осуждена за убийство своего мужа, а затем вообще
                перестала говорить. Тео Фабер, психотерапевт, очарован случаем
                Алисии и берется за дело, пытаясь заставить ее снова говорить.
                Роман представляет собой извилистую, напряженную поездку, в
                которой исследуются темы любви, одержимости и темные уголки
                человеческой психики. Это перелистывание страниц, которое
                заставит читателей гадать до самого конца.
              </p>
            </div>
          </div>
          <div className="books__item">
            <div className="books__item-header">
              <div className="books__content">
                <h3 className="books__header-title">Молчаливый пациент</h3>
                <p className="books__author">Автор: Алекс Михаэлидис</p>
              </div>
              <div className="books__image"></div>
            </div>
            <div className="books__text">
              <p className="text__books">
                Описание: "Молчаливый пациент" - это психологический триллер,
                рассказывающий историю Алисии Беренсон, известной художницы,
                которая была осуждена за убийство своего мужа, а затем вообще
                перестала говорить. Тео Фабер, психотерапевт, очарован случаем
                Алисии и берется за дело, пытаясь заставить ее снова говорить.
                Роман представляет собой извилистую, напряженную поездку, в
                которой исследуются темы любви, одержимости и темные уголки
                человеческой психики. Это перелистывание страниц, которое
                заставит читателей гадать до самого конца.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BooksArticles;
