import HeaderModules from "../Header/HeaderModules"
import style from "../../Modules/AdditionalFiles/style.css"

const AdditionalFiles = () => {
  return (
    <div className="add__files">
      <HeaderModules />
      <div className="additional__files-container container-add">
        <h2 className="article-title">доп.файлы</h2>
        <div className="add-article">
          <article className="add__articles-item">Название статьи</article>
          <article className="add__articles-item">Название статьи</article>
          <article className="add__articles-item">Название статьи</article>
          <article className="add__articles-item">Название статьи</article>
          <article className="add__articles-item">Название статьи</article>
          <article className="add__articles-item">Название статьи</article>
          <article className="add__articles-item">Название статьи</article>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFiles;
