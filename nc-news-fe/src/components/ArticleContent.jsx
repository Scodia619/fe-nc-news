const ArticleContent = ({ currentArticle }) => {
  const date = [];
  for (let i = 0; i < currentArticle.created_at.length; i += 10) {
    date.push(currentArticle.created_at.slice(i, i + 10));
  }
  return (
    <section className="d-flex flex-column">
      <h1>{currentArticle.title}</h1>
      <img src={currentArticle.article_img_url} alt="" />
      <p>{currentArticle.body}</p>
      <div className="d-flex justify-content-around">
        <h4>{currentArticle.author}</h4>
        <h4>{date[0]}</h4>
      </div>
    </section>
  );
};

export default ArticleContent;
