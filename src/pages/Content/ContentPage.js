import React, { useState, useRef, useEffect } from "react";
import "../../Css files/ContentPage.css";
import TopBar from "../../components/TopBar";
import SongPlayer from "../../components/SongPlayer";
import { artistImages, coverImages, playlistImages,songcovers } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import audio from "../../assets/songs/Stay(PagalNew.Com.Se).mp3"
import audio1 from "../../assets/songs/Tumse Milke Dil Ka Main Hoon Na 128 Kbps.mp3"
import audio2 from "../../assets/songs/shake_it_off.mp3"
import audio3 from "../../assets/songs/128-Raanjhanaa - Raanjhanaa 128 Kbps.mp3"
import audio4 from "../../assets/songs/Lover.mp3"
import PlaylistCardSection from '../../components/PlaylistCardSection'


const cards = [
  { id: 1, title: "CHAPTER 1", volume: "VOL 1", artist: "MARIZU", backgroundImage: artistImages.diljit },
  { id: 2, title: "CHAPTER 2", volume: "VOL 2", artist: "JOHN DOE", backgroundImage: artistImages.arijit },
  { id: 3, title: "CHAPTER 3", volume: "VOL 3", artist: "JANE DOE", backgroundImage: artistImages.rahman },
  { id: 4, title: "CHAPTER 4", volume: "VOL 4", artist: "SMITH", backgroundImage: artistImages.justin },
  { id: 5, title: "CHAPTER 5", volume: "VOL 5", artist: "DOE SMITH", backgroundImage: artistImages.taylor },
];

const featured = [
  { id: 2, title: "Stay", artist: "Justin Bieber", backgroundImage: coverImages.stay, audioSrc: audio },
  { id: 4, title: "Tumse Milke", artist: "AR Rahman", backgroundImage: coverImages.tumseMilke, audioSrc: audio1},
  { id: 3, title: "Shake It Off", artist: "Taylor", backgroundImage: coverImages.shakeItOff, audioSrc: audio2 },
  { id: 1, title: "Ranjhana", artist: "Sonu Nigam", backgroundImage: coverImages.ranjhna, audioSrc: audio3 },
  { id: 5, title: "Lover", artist: "Diljit", backgroundImage: coverImages.lover, audioSrc: audio4 },
  { id: 3, title: "Shake It Off", artist: "Taylor", backgroundImage: coverImages.shakeItOff, audioSrc: audio2 },
];

const popularPlaylists = [
  { id: 1, title: "Cold Play", backgroundImage: playlistImages.coldlay },
  { id: 2, title: "Old is gold", backgroundImage: playlistImages.oldisgold },
  { id: 3, title: "Punjabi Hit", backgroundImage: playlistImages.punjabi },
  { id: 4, title: "Party Hits", backgroundImage: playlistImages.partyHits },
  { id: 5, title: "Happy Vibes", backgroundImage: playlistImages.happy },
  { id: 6, title: "Sad Hits", backgroundImage: playlistImages.sadHits },
];

const bestOfGodSongs = [
  { id: 1, title: "Amazing Grace", artist: "John Newton", CoverImage: songcovers.godsong1, audioSrc: audio },
  { id: 2, title: "How Great Thou Art", artist: "Carrie Underwood", CoverImage: songcovers.godsong2, audioSrc: audio1 },
  { id: 3, title: "Hallelujah", artist: "Leonard Cohen", CoverImage: songcovers.godsong3, audioSrc: audio2 },
  { id: 4, title: "Oceans", artist: "Hillsong United", CoverImage: songcovers.godsong4, audioSrc: audio3 },
  { id: 4, title: "Oceans", artist: "Hillsong United", CoverImage: songcovers.godsong5, audioSrc: audio3 },
  { id: 4, title: "Oceans", artist: "Hillsong United", CoverImage: songcovers.godsong3, audioSrc: audio3 },
  
];


const ContentPage = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Initially set the 3rd card as active (index 2)
  const featuredRowRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const popularRowRef = useRef(null);
  const navigate = useNavigate();

  const handlePlaylistClick = (playlist) => {
    navigate("/playlist", { state: playlist }); // Pass the clicked playlist's data
  };
  

  useEffect(() => {
    const featuredRow = featuredRowRef.current;

    if (featuredRow) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = featuredRow;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft <= 0) {
          // If at the start, jump to the last original item
          featuredRow.scrollLeft = maxScrollLeft - clientWidth;
        } else if (scrollLeft >= maxScrollLeft) {
          // If at the end, jump to the first original item
          featuredRow.scrollLeft = clientWidth;
        }
      };

      featuredRow.addEventListener("scroll", handleScroll);
      return () => featuredRow.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (featuredRowRef.current) {
      // Ensure the total scrollable width is greater than the container
      const containerWidth = featuredRowRef.current.offsetWidth;
      const contentWidth = featuredRowRef.current.scrollWidth;
  
      if (contentWidth <= containerWidth) {
        console.warn("Content width is less than or equal to the container width.");
      }
    }
  }, []);
  

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleFeatureCardClick = (song) => {
    setCurrentSong(song);
  };

  const getCardClass = (index) => {
    const relativeIndex = (index - activeIndex + cards.length) % cards.length;

    switch (relativeIndex) {
      case 0:
        return "active";
      case 1:
        return "left-stacked";
      case 2:
        return "left-stacked second";
      case cards.length - 1:
        return "right-stacked";
      case cards.length - 2:
        return "right-stacked second";
      default:
        return "hidden";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 7000); // Change card every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="content-page">
     <TopBar />

      {/* Cards Container */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${getCardClass(index)}`}
            onClick={() => handleCardClick(index)}
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
          >
            <div className="card-content">
              <span className="card-number">#{card.id}</span>
              <div className="card-details">
                <div className="card-title">ALBUM</div>
                <div className="card-subtitle">{card.title}</div>
                <div className="card-volume">{card.volume}</div>
                <div className="card-artist">{card.artist}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="featured-this-week">
        <h2>Featured This Week</h2>
        <div className="featured-songs-grid">
        {featured.map((item) => (
      <div key={item.id} className="featured-song-container" onClick={() => handleFeatureCardClick(item)}>
        <div className="featured-song-card">
          <img src={item.backgroundImage} alt="Song cover" className="featured-song-image" />
        </div>
        <div className="featured-song-details">
          <p className="featured-song-name">{item.title}</p>
          <p className="featured-artist-name">{item.artist}</p>
        </div>
      </div>
    ))}
  </div>

        {/* Popular Playlist Section */}
        <div className="popular-playlists">
  <h2>Popular Playlists</h2>
  <div className="popular-row" ref={popularRowRef}>
    {popularPlaylists.map((playlist) => (
      <div
        key={playlist.id}
        className="popular-card"
        style={{ backgroundImage: `url(${playlist.backgroundImage})` }}
        onClick={() => handlePlaylistClick(playlist)} // Navigate on click
      ></div>
    ))}
  </div>
</div>


<div className="best-of-god-songs-section">
  <h2 className="section-title">Best Of God Songs</h2>
  <div className="songs-grid">
    {bestOfGodSongs.map((song) => (
      <div key={song.id} className="song-container">
        <div className="song-card">
          <img src={song.CoverImage} alt="Song cover" className="song-image" />
        </div>
        <div className="song-details">
          <p className="song-name">{song.title}</p>
          <p className="artist-name">{song.artist}</p>
        </div>
      </div>
    ))}
  </div>
</div>


<PlaylistCardSection/>
      
      
    </div>
     {/* Audio Player */}
       {currentSong && <SongPlayer song={currentSong} />}
    </div>
  );
};

export default ContentPage;
