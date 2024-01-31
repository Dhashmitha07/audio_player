// src/components/Playlist.js
import React from 'react';
const Playlist = ({ files, onPlay }) => {
  return (
    <div className="playlist-container">
    <ul>
      {files.map((file, index) => (
        <li key={index} onClick={() => onPlay(file)}>
          {file.name}
        </li>
      ))}
    </ul>
    </div>
  );

};

export default Playlist;
