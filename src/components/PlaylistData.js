// playlistsData.js
import songImage1 from "../assets/song_covers/3-peg.jpg";
import songImage2 from "../assets/song_covers/8-parche.jpg";
import songImage3 from "../assets/song_covers/one-love.jpg";
import songImage4 from "../assets/song_covers/softly.jpeg";
import songImage5 from "../assets/song_covers/true-stories.jpeg";
import songImage6 from "../assets/song_covers/A Sky Full of Stars.jpeg";
import songImage7 from "../assets/song_covers/Hymm For the Weekend.jpg";
import songImage8 from "../assets/song_covers/Yellow.jpeg";
import songImage9 from "../assets/song_covers/Something just like this.png";
import songImage10 from "../assets/song_covers/Paradise.jpeg";
import audio1 from "../assets/songs/Lover.mp3";
import audio2 from "../assets/songs/Lover.mp3";
import audio3 from "../assets/songs/Lover.mp3";
import audio4 from "../assets/songs/Lover.mp3";
import audio5 from "../assets/songs/Lover.mp3";
import bg1 from "../assets/playlist-cover/cold_play.jpeg"
import bg2 from "../assets/playlist-cover/old.jpeg"
import bg3 from "../assets/playlist-cover/punjabi.jpg"
import bg4 from "../assets/playlist-cover/happy.jpeg"
import bg5 from "../assets/playlist-cover/sad.jpg"
import bg6 from "../assets/playlist-cover/party.jpeg"


const playlistsData = [
  {
    id: 1,
    title: "Cold Play",
    backgroundImage: bg1,
    songs: [
        {
            id: 6,
            title: "A Sky Full of Stars",
            artist: "ColdPlay",
            time: "4:27",
            audioSrc: audio1,
            backgroundImage: songImage6,
          },
          {
            id: 7,
            title: "Hymm For the Weekend",
            artist: "ColdPlay",
            time: "4:18",
            audioSrc: audio2,
            backgroundImage: songImage7,
          },
          {
            id: 8,
            title: "Yellow",
            artist: "ColdPlay",
            time: "4:26",
            audioSrc: audio3,
            backgroundImage: songImage8,
          },
      {
        id: 9,
        title: "Something just like this",
        artist: "ColdPlay",
        time: "4:07",
        audioSrc: audio4,
        backgroundImage: songImage9,
      },
      {
        id: 10,
        title: "Paradise",
        artist: "ColdPlay",
        time: "4:38",
        audioSrc: audio5,
        backgroundImage: songImage10,
      },
    ],
  },
  {
    id: 2,
    title: "Old is Gold",
    backgroundImage: bg2,
    songs: [
     
    ],
  },
  {
    id: 3,
    title: "Punjabi Hits",
    backgroundImage: bg3,
    songs: [
        {
            id: 1,
            title: "3 Peg",
            artist: "Sharry Mann, Raviraj",
            time: "1:50",
            audioSrc: audio1,
            backgroundImage: songImage1,
          },
          {
            id: 2,
            title: "8 Parche",
            artist: "Banni Sandhu, Gur Sidhu",
            time: "2:43",
            audioSrc: audio2,
            backgroundImage: songImage2,
          },
          {
            id: 3,
            title: "One Love",
            artist: "Shubh",
            time: "2:45",
            audioSrc: audio3,
            backgroundImage: songImage3,
          },
      {
        id: 4,
        title: "Softly",
        artist: "Karan Aujla, Ikky",
        time: "4:07",
        audioSrc: audio4,
        backgroundImage: songImage4,
      },
      {
        id: 5,
        title: "True Stories",
        artist: "AP Dhillon, Shinda Kahlon",
        time: "2:43",
        audioSrc: audio5,
        backgroundImage: songImage5,
      },
    ],
  },
  {
    id: 4,
    title: "Party Hits",
    backgroundImage: bg6,
    songs: [
     
    ],
  },
  {
    id: 5,
    title: "Happy Vibes",
    backgroundImage: bg4,
    songs: [
     
    ],
  },
  {
    id: 6,
    title: "Sad Hits",
    backgroundImage: bg5,
    songs: [
     
    ],
  },
];

export default playlistsData;
