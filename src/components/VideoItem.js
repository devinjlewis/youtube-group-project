import React from "react";

function VideoItem({ video, onClick }) {
  return (
    <div className="video-item" onClick={onClick}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h3>{video.snippet.title}</h3>
    </div>
  );
}

export default VideoItem;
