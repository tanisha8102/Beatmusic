import React from "react";
import "../Css files/ContentPage.css";
import bollywoodImage from "../assets/artist/arijit.jpg"; // Replace with actual path
import tollywoodImage from "../assets/cover-feature-album/lover_diljit.jpg"; // Replace with actual path
import video1 from "../assets/videos/3209858-sd_426_240_25fps.mp4";
import video2 from "../assets/videos/4153808-sd_426_226_25fps.mp4";

const playlists = [
  {
    id: 1,
    title: "Bollywood Central",
    subtitle: "Playlist · Spotify",
    description: "Bollywood Central, jab baje toh seedha dil ke centre mein",
    cover: bollywoodImage,
    video: video1,
    bgLabel: "Cover · Street 2",
  },
  {
    id: 2,
    title: "Tollywood Pearls",
    subtitle: "Playlist · Spotify",
    description: "The finest set of Telugu music from the past 10 years.",
    cover: tollywoodImage,
    video: video2,
    bgLabel: "Cover · Hi Nanna",
  },
];

const PlaylistCardSection = () => {
    return (
      <div className="playlist-section">
        {playlists.map((playlist) => (
         <div className="playlist-card">
         <div className="playlist-bg">
           <video
             className="playlist-video"
             autoPlay
             loop
             muted
             src={playlist.video}
           />
         </div>
         <div className="playlist-overlay">
           <div className="playlist-header">
             <img
               src={playlist.cover}
               alt={playlist.title}
               className="playlist-cover"
             />
             <div className="playlist-text">
               <h2 className="playlist-title">{playlist.title}</h2>
               <p className="playlist-subtitle">{playlist.subtitle}</p>
             </div>
           </div>
           <div className="playlist-details">
             <p className="playlist-description">{playlist.description}</p>
             <span className="playlist-bg-label">{playlist.bgLabel}</span>
           </div>
         </div>
       </div>
       
        ))}
      </div>
    );
  };
  
  export default PlaylistCardSection;