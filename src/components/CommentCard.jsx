import CommentVoting from "./CommentVoting";
import { deleteCommentById } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentCard = ({ comment, setComments }) => {
  const date = [];
  for (let i = 0; i < comment.created_at.length; i += 10) {
    date.push(comment.created_at.slice(i, i + 10));
  }

  const notify = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDelete = (commentId) => {
    deleteCommentById(comment.comment_id).then(() => {
      notify("Comment Deleted");
      setComments((prevComments) => {
        return prevComments.filter(
          (comment) => comment.comment_id !== commentId
        );
      });
    });
  };

  return (
    <section className="border border-black p-2 m-2">
      <h6>{comment.body}</h6>
      <div className="d-flex justify-content-around">
        <p className="fw-bold">{comment.author}</p>
        <p className="fw-bold  align-items-center">
          {date[0]}
        </p>
      </div>
      <CommentVoting currentComment={comment} />
      <button
        onClick={() => {
          handleDelete(comment.comment_id);
        }}
      >
        Delete
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default CommentCard;
