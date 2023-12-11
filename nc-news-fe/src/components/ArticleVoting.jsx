const ArticleVoting = ({currentArticle}) => {
    return (
        <section className="d-flex justify-content-around">
            <button>Upvote</button>
            <h1>{currentArticle.votes}</h1>
            <button>Downvote</button>
        </section>
    )
}

export default ArticleVoting