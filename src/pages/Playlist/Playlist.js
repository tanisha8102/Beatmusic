import React, { useState } from "react";
import "../../Css files/Playlist.css";
import TopBar from "../../components/TopBar";
import { FaPlay, FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Playlist() {
  const [favorites, setFavorites] = useState([false, false, false, false, false]);
  const location = useLocation();
  const playlistData = location.state; 

  const songs = [
    { id: 1, title: "Flowers in Your Hair", artist: "The Lumineers", time: "1:50" },
    { id: 2, title: "Classy Girls", artist: "The Lumineers", time: "2:45" },
    { id: 3, title: "Submarines", artist: "The Lumineers", time: "2:43" },
    { id: 4, title: "Dead Sea", artist: "The Lumineers", time: "4:07" },
    { id: 5, title: "Ho Hey", artist: "The Lumineers", time: "2:43" },
  ];

  const toggleFavorite = (index) => {
    setFavorites((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
  };

  return (
    <div>
      <TopBar />

      {/* Header Section */}
      <div className="playlist-container">
        <div className="header">
          <div className="header-content">
            <img src={playlistData.backgroundImage} alt="Album Cover" />
            <div className="header-details">
              <h1>{playlistData.title}</h1>
              <p>2023 • 5 songs • 15:30 • Various Artists</p>
              <button className="play-button">
                <FaPlay className="play-icon" /> Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Table */}
      <div className="full-width-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <td>
                  <img
                    src={playlistData.backgroundImage} // Use playlist cover for all songs
                    alt="Song Thumbnail"
                    className="song-thumbnail"
                  />
                  <div className="song-info">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                </td>
                <td className="large-only">{song.artist}</td>
                <td>{song.time}</td>
                <td className="icon" onClick={() => toggleFavorite(index)}>
                  {favorites[index] ? (
                    <FaHeart className="heart-icon red" />
                  ) : (
                    <FaHeart className="heart-icon white" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Playlist;