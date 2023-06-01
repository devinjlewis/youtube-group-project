import React from "react";

function VideoItem({ video, onClick }) {
  return (
    <div className="video-item center" onClick={onClick}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
    </div>
  );
}

export default VideoItem;
