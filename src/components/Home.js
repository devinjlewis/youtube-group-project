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
    const [isSearch, setIsSearch] = useState(false);
    useEffect(() => {
        setIsEmptySearch(searchInput.trim() === "");
    }, [searchInput]);
    useEffect(() => {
        // This code will run after the page has loaded
        if (isSearch && !searchResults.length) {
            // Add your code here to show the modal
            openModal();
        }

        // eslint-disable-next-line
    }, [searchResults]);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSearchInput("");
    };
    const handleSearch = () => {
        if (searchInput.trim() === "") {
            setIsEmptySearch(true);
            setSearchResults([]);
        } else {
            setIsEmptySearch(false);
            fetchVideos(searchInput);
            setIsSearch(true);
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
        <>
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
                        <div className="search-results container search mt-3">
                            <div className="row">
                                {searchResults.map((video) => (
                                    <div
                                        className="col-md-6 d-flex flex-column align-items-center justify-content-center"
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
                                        <h4 className="text-center">
                                            {video.snippet.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            {showModal && (
                <div
                    className="modal fade show"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ display: "block" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5 text-danger"
                                    id="exampleModalLabel"
                                >
                                    Error
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                Your search came back empty. Please try again.
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
