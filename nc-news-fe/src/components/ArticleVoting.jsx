const ArticleVoting = ({currentArticle}) => {
    return (
        <section>
            <button>Upvote</button>
            <h1>{currentArticle.votes}</h1>
            <button>Downvote</button>
        </section>
    )
}

export default ArticleVoting