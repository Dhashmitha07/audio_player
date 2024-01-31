// App.js
import React, { useState, useEffect } from 'react';
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';
import AudioUploader from './components/AudioUploader';
import { loadLastPlayed, saveLastPlayed, loadLastPosition, saveLastPosition } from './utils/storage';
import './App.css';

const App = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    // Fetch and set playlist data, e.g., from an API
    // For simplicity, we'll use a dummy array of file objects
    const dummyFiles = [
      { name: 'Song 1', url: '/path/to/song1.mp3' },
      { name: 'Song 2', url: '/path/to/song1.mp3' },
      { name: 'Song 3', url: '/path/to/song1.mp3' },
      // Add more file objects as needed
    ];
    setAudioFiles(dummyFiles);

    // Load last played audio file and last position
    const lastPlayed = loadLastPlayed();
    const position = loadLastPosition();

    if (lastPlayed && position) {
      setCurrentTrack(lastPlayed);
      setLastPosition(position);
    }
  }, []);

  const handlePlay = (file) => {
    setCurrentTrack(file);
    saveLastPlayed(file);
  };

  const handleEnded = () => {
    // Logic to play the next track in the playlist
    const currentIndex = audioFiles.findIndex((file) => file === currentTrack);
    const nextTrack = audioFiles[(currentIndex + 1) % audioFiles.length];
    setCurrentTrack(nextTrack);
    saveLastPlayed(nextTrack);
  };

  const handleAudioUpload = (fileName, audioData) => {
    // Add the newly uploaded audio file to the playlist
    setAudioFiles([...audioFiles, { name: fileName, url: audioData }]);
  };

  return (
    <div>
      <h1>Audio Player App</h1>
      <AudioPlayer
        src={currentTrack?.url}
        onEnded={handleEnded}
        saveLastPosition={(position) => saveLastPosition(position)}
      />
      <Playlist files={audioFiles} onPlay={handlePlay} />
      <AudioUploader onAudioUpload={handleAudioUpload} />
    </div>
  );
};

export default App;
