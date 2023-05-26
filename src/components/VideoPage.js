import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./VideoPage.css";

function VideoPage() {
  const { videoId } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      comment,
    };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div className="container">
      <div className="video-page">
        <YouTube videoId={videoId} />

        <div className="comment-section">
          <h2>Comments</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                className="form-control"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="comment-list">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.name}</strong>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
