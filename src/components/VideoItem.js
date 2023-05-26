import React from "react";

function VideoItem({ video, onClick }) {
  return (
    <div className="video-item card mb-3" onClick={onClick}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img video-thumbnail"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
