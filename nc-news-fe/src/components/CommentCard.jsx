import CommentVoting from "./CommentVoting";

const CommentCard = ({ comment }) => {
  return(
  <section className="comment-card">
    <h6 className="comment-body">{comment.body}</h6>
    <CommentVoting currentComment={comment}/>
  </section>);
};

export default CommentCard;
