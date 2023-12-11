import { useState } from "react"

const CommentContent = () => {

    const [comment, setComment] = useState("")

    return (
        <form>
            <label htmlFor="comment">
                <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            </label>
            <button>Add</button>
            <h2>Most Recent Comment</h2>
            <button>View All Comments</button>
        </form>
    )
}

export default CommentContent