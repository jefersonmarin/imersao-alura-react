import React from "react";
import './PlaylistContainer.css'
import Playlist from "./Playlist/Playlist";

const PlaylistContainer = () => {
    return (
        <>
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boa tarde</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>
                </div>

                {/* LIST ITEM 1 */}
                <Playlist />
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href=""></a>
                            <span className="artist-name" id="artist-name"></span>
                            <span className="artist-categorie">Artista</span>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default PlaylistContainer