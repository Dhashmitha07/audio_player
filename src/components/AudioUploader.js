// AudioUploader.js
import React, { useState } from 'react';
const AudioUploader = ({ onAudioUpload }) => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.includes('audio')) {
      setAudioFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        const audioData = e.target.result;
        onAudioUpload(file.name, audioData);
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid audio file (e.g., mp3).');
    }
  };

  return (
    <div className="audio-uploader-container">
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {audioFile && <p>Audio file selected: {audioFile.name}</p>}
    </div>
  );
};

export default AudioUploader;
