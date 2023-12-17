const ArticleCard = ({ article }) => {
  const date = [];
  for (let i = 0; i < article.created_at.length; i += 10) {
    date.push(article.created_at.slice(i, i + 10));
  }

  console.log(article)

  return (
    <section className="article-card">
      <h2>{article.title}</h2>
      <img className="article-card-image" src={article.article_img_url} alt={article.title} />
      <div className="article-information">
        <h3>{article.author}</h3>
        <h3>{date[0]}</h3>
      </div>
      <div className="article-information">
        <h6>Votes: {article.votes}</h6>
        <h6>Comments: {article.comment_count}</h6>
      </div>
    </section>
  );
};

export default ArticleCard;
