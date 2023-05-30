import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove,
    set,
} from "firebase/database";
import firebaseConfig from "../components/firebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function VideoPage() {
    const { videoId } = useParams();
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentsRef = ref(database, `videos/${videoId}/comments`);
        const unsubscribe = onValue(commentsRef, (snapshot) => {
            const commentsData = snapshot.val() || {};
            const commentsArray = Object.entries(commentsData).map(
                ([key, value]) => ({
                    id: key,
                    ...value,
                })
            );
            setComments(commentsArray);
        });

        return () => {
            unsubscribe();
        };
    }, [videoId]);

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

        const commentsRef = ref(database, `videos/${videoId}/comments`);
        push(commentsRef, newComment)
            .then(() => {
                setName("");
                setComment("");
            })
            .catch((error) => {
                console.error("Error adding comment:", error);
            });
    };
    const handleDelete = (commentId) => {
        const commentRef = ref(
            database,
            `videos/${videoId}/comments/${commentId}`
        );
        remove(commentRef).catch((error) => {
            console.error("Error deleting comment:", error);
        });
    };

    const handleEdit = (commentId, updatedComment) => {
        const commentRef = ref(
            database,
            `videos/${videoId}/comments/${commentId}`
        );
        set(commentRef, updatedComment).catch((error) => {
            console.error("Error updating comment:", error);
        });
    };

    return (
        <div className="container">
            <div className="video-page">
                <YouTube videoId={videoId} />

                <div className="comment-section">
                    <h2>Comments</h2>
                    <form onSubmit={handleSubmit} action="#">
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
                        {comments.map((comment) => (
                            <div key={comment.id} className="comment">
                                <strong>{comment.name}</strong>
                                <p>{comment.comment}</p>
                                <button
                                    onClick={() => handleDelete(comment.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() =>
                                        handleEdit(comment.id, {
                                            name: comment.name,
                                            comment: "Updated comment",
                                        })
                                    }
                                >
                                    Edit
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPage;
