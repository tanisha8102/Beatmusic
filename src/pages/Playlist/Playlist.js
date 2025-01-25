import React, { useState } from "react";
import "../../Css files/Playlist.css";
import TopBar from "../../components/TopBar";
import SongPlayer from "../../components/SongPlayer";
import { FaPlay, FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import playlistsData from "../../components/PlaylistData";
// import MoreVertIcon from '@mui/icons-material/MoreVert';


function Playlist() {
  const [favorites, setFavorites] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const location = useLocation();
  const playlistData = playlistsData.find((playlist) => playlist.id === location.state.id);

  const toggleFavorite = (index) => {
    setFavorites((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
  };

  const handleSongClick = (song) => {
    setCurrentSong(song); // Set the selected song to play
  };

  return (
    <div>
      <TopBar />
      <div className="playlist-container">
        <div className="header">
          <div className="header-content">
            <img src={playlistData.backgroundImage} alt="Album Cover" />
            <div className="header-details">
              <h1>{playlistData.title}</h1>
              <p>2023 • {playlistData.songs.length} songs • Various Artists</p>
              <button className="play-button">
                <FaPlay className="play-icon" /> Play
              </button>
            </div>
          </div>
        </div>
      </div>

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
            {playlistData.songs.map((song, index) => (
              <tr key={song.id} onClick={() => handleSongClick(song)}>
                <td>
                  <img
                    src={song.backgroundImage || "default-cover.jpg"}
                    alt={`${song.title} Thumbnail`}
                    className="song-thumbnail"
                  />
                  <div className="song-info">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                </td>
                <td className="large-only">{song.artist}</td>
                <td>{song.time}</td>
                <td
                  className="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(index);
                  }}
                >
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

      {currentSong && <SongPlayer song={currentSong} />}
    </div>
  );
}

export default Playlist;
