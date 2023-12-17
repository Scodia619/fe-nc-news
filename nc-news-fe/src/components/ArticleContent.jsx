const ArticleContent = ({ currentArticle }) => {
  const date = [];
  for (let i = 0; i < currentArticle.created_at.length; i += 10) {
    date.push(currentArticle.created_at.slice(i, i + 10));
  }
  return (
    <section className="article-page">
      <h2 className="article-title">{currentArticle.title}</h2>
      <img src={currentArticle.article_img_url} alt="" />
      <p>{currentArticle.body}</p>
      <div className="article-information">
        <h4>{currentArticle.author}</h4>
        <h4>{date[0]}</h4>
      </div>
    </section>
  );
};

export default ArticleContent;
