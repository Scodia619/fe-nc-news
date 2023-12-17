const CommentVoting = ({currentComment}) => {
    return (
        <section className="comment-voting">
            <button className="button">Upvote</button>
            <h1>{currentComment.votes}</h1>
            <button className="button">Downvote</button>
        </section>
    )
}

export default CommentVoting