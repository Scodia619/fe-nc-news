const ArticleContent = ({currentArticle}) => {
    return (
        <>
        <h1>{currentArticle.title}</h1>
        <img src={currentArticle.article_img_url} alt="" />
        <p>{currentArticle.body}</p>
        <h4>{currentArticle.author}</h4>
        <h4>{currentArticle.created_at}</h4>
        </>
    )
}

export default ArticleContent