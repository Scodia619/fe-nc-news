import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { postCommentById } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import add from '../assets/icons/arrow-right-circle.svg'

const CommentContent = ({ comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 

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
    setIsSubmitting(true);
    if(comment === ""){
        notify("No text recieved")
        setIsSubmitting(false)
        return;
    }
    postCommentById(comments[0].article_id, {
      username: "tickle122",
      body: comment,
    }).then((res) => {
        notify("Posted the comment")
        setComment("");
        setComments((prevComments) => [res, ...prevComments]);
      }).catch((err) => {
        notify("Something went wrong")
      }).finally(()=>{
        setIsSubmitting(false)
      })
  };

  const viewComments = () => {
    if(showComments === false){setShowComments(true)}
    else{setShowComments(false)}
  }

  return (
    <section className="d-flex flex-column align-items-center m-4">
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="comment-input">
        <label htmlFor="comment">
        <textarea className="comment-input-field"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={isSubmitting}
              rows={2} // Set the desired number of rows for the textarea
              cols={30} // Set the desired number of columns for the textarea
            />
          </label>
          <button className="button comment-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : <img src={add} className="comment-add-svg"/>}
          </button>
        </div>
      </form>
      <button className="button" onClick={viewComments}>{!showComments ? "View All Comments": "Hide Comments"}</button>
      {comments && comments.length > 0 && showComments ? (
        comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} setComments={setComments}/>;
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
