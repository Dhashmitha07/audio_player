// AudioPlayer.js
import React, { useRef, useEffect, useState } from 'react';
const AudioPlayer = ({ src, onEnded, saveLastPosition }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
      audioRef.current.load();
    }
  }, [src, currentTime]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleEnded = () => {
    // Save the last position when the audio completes
    saveLastPosition(audioRef.current.currentTime);
    onEnded();
  };

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} controls onTimeUpdate={handleTimeUpdate} onEnded={handleEnded}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
