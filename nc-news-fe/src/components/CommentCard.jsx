import CommentVoting from "./CommentVoting";

const CommentCard = ({ comment }) => {
  return(
  <section className="border border-black p-2 m-2">
    <h6>{comment.body}</h6>
    <CommentVoting currentComment={comment}/>
  </section>);
};

export default CommentCard;
