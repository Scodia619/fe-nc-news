const ArticleCard = ({ article }) => {
  const date = [];
  for (let i = 0; i < article.created_at.length; i += 10) {
    date.push(article.created_at.slice(i, i + 10));
  }

  return (
    <section className="border border-black">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <h2>{article.author}</h2>
      <h2>{date[0]}</h2>
    </section>
  );
};

export default ArticleCard;
