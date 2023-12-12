import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { postCommentById } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentContent = ({ comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    postCommentById(comments[0].article_id, {
      username: "tickle122",
      body: comment,
    }).then((res) => {
        notify("Comment Posted");
        setComment("");
      }).catch((err) => {
        alert(err)
      });
  };

  return (
    <section className="d-flex flex-column align-items-center m-4">
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="d-flex">
          <label htmlFor="comment">
            <input
              type="text"
              value={comment}
              id="comment"
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button>Add</button>
        </div>
      </form>
      <button onClick={() => setShowComments(true)}>View All Comments</button>
      {showComments ? (
        comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })
      ) : (
        <></>
      )}
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

export default CommentContent;
