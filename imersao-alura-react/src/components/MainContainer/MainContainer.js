import React from "react";
import './MainContainer.css';
import Header from "./Header/Header";
import PlaylistContainer from "./Playlist/PlaylistContainer";

const MainContainer = () => {
    return (
        <div className="main-container">
            <Header />
            <PlaylistContainer />
        </div>
    )
}
export default MainContainer