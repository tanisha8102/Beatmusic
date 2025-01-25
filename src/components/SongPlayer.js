import React, { useRef, useState, useEffect } from "react";
import "../Css files/SongPlayer.css";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const SongPlayer = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liked, setLiked] = useState(false); // State for the like button

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    setLiked(!liked); // Toggle like state
  };

  const handleAudioTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    updateSeekBarGradient(audioRef.current.currentTime, duration);
  };

  const handleAudioLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const updateSeekBarGradient = (currentTime, duration) => {
    const seekBar = document.querySelector(".seek-bar");
    const progress = (currentTime / duration) * 100 || 0;
    seekBar.style.background = `linear-gradient(to right, #68eb2b ${progress}%, #ddd ${progress}%)`;
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    const seekBar = document.querySelector(".seek-bar");
    updateSeekBarGradient(currentTime, duration);

    return () => {
      if (seekBar) {
        seekBar.style.background = "linear-gradient(to right, #68eb2b 0%, #ddd 0%)";
      }
    };
  }, [currentTime, duration]);

  return (
    <div className="song-player">
      <div className="player-header">
        <img
          src={song?.backgroundImage || "default-cover.jpg"}
          alt="Album Cover"
          className="album-cover"
        />
        <div className="player-details">
          <span className="song-player-title">{song?.title || "No Song Selected"}</span>
          <span className="song-artist">{song?.artist || "Unknown Artist"}</span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={song?.audioSrc}
        onTimeUpdate={handleAudioTimeUpdate}
        onLoadedMetadata={handleAudioLoadedMetadata}
      />
      <div className="player-controls">
      <button onClick={togglePlayPause} className="control-btn">
        {isPlaying ? (
          <PauseIcon sx={{ fontSize: 30, color: "white" }} />
        ) : (
          <PlayArrowIcon sx={{ fontSize: 30, color: "white" }} />
        )}
      </button>

        <div className="track-info">
          <span className="current-time">{formatTime(currentTime)}</span>
          <input
            type="range"
            className="seek-bar"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
          />
          <span className="duration">{formatTime(duration)}</span>
          {/* Add Like Button */}
          <button onClick={toggleLike} className={`like-btn ${liked ? "liked" : ""}`}>
            {liked ? <CheckCircleIcon sx={{ fontSize: 30}} /> : <AddCircleOutlineOutlinedIcon sx={{ fontSize: 30 }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
