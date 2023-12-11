import { useState } from "react"
import CommentCard from "./CommentCard"

const CommentContent = ({comments}) => {

    const [comment, setComment] = useState("")
    const [showComments, setShowComments] = useState(false)

    return (
            <section>
        <form className="d-flex flex-column align-items-center">
            <div className="d-flex">
            <label htmlFor="comment">
                <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            </label>
            <button>Add</button>
            </div>
        </form>
            <h2>Most Recent Comment</h2>
            <button onClick={()=> setShowComments(true)}>View All Comments</button>
            {showComments ? (
                comments.map(comment => {
                    return <CommentCard key={comment.comment_id} comment={comment} />
                })
            ): <></>}
            </section>
    )
}

export default CommentContent