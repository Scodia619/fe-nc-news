import { useEffect, useState } from "react"

import { patchVotesByArticleId } from "../../api"

const ArticleVoting = ({currentArticle}) => {

    const [votes, setVotes] = useState(0)

    useEffect(()=>{
        setVotes(currentArticle.votes)
    }, [])

    const handleVotes = (val) => {
        setVotes((votes) + val)
        patchVotesByArticleId(currentArticle.article_id, val)
    }

    return (
        <section className="d-flex justify-content-around">
            <button onClick={()=>{handleVotes(1)}}>Upvote</button>
            <h1>{votes}</h1>
            <button onClick={()=>{handleVotes(-1)}}>Downvote</button>
        </section>
    )
}

export default ArticleVoting