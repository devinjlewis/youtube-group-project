import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import VideoItem from "./VideoItem";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [isEmptySearch, setIsEmptySearch] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    useEffect(() => {
        setIsEmptySearch(searchInput.trim() === "");
    }, [searchInput]);

    const handleSearch = () => {
        if (searchInput.trim() === "") {
            setIsEmptySearch(true);
            setSearchResults([]);
        } else {
            setIsEmptySearch(false);
            fetchVideos(searchInput);
        }
    };

    const fetchVideos = async (searchQuery) => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            setSearchResults(data.items || []);
        } catch (error) {
            console.error("Error fetching videos:", error);
            setSearchResults([]);
        }
    };

    const handleVideoClick = (videoId) => {
        setSelectedVideoId(videoId);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <SearchBox
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onSearch={handleSearch}
                onKeyPress={handleKeyPress}
            />

            {isEmptySearch && (
                <p className="search-message">
                    No search yet! Please submit a search above.
                </p>
            )}

            {selectedVideoId && (
                <div className="video-player">
                    <YouTube videoId={selectedVideoId} />
                </div>
            )}

            {searchResults && searchResults.length > 0 && (
                <>
                    <div className="search-results container">
                        <div className="row">
                            {searchResults.map((video) => (
                                <div
                                    className="col-md-6"
                                    key={video.id.videoId}
                                >
                                    <Link
                                        to={`/video/${video.id.videoId}`}
                                        className="video-link"
                                    >
                                        <VideoItem
                                            video={video}
                                            onClick={() =>
                                                handleVideoClick(
                                                    video.id.videoId
                                                )
                                            }
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
