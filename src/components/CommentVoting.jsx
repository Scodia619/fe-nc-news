const CommentVoting = ({currentComment}) => {
    return (
        <section className="d-flex justify-content-around">
            <button>Upvote</button>
            <h1>{currentComment.votes}</h1>
            <button>Downvote</button>
        </section>
    )
}

export default CommentVoting