import React, { useState, useEffect } from 'react';
import audioFile from '../../../img/test-music.mp3';
import '../../audio.css'

function AudioComponent() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlayClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressBarClick = e => {
    const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
    audioRef.current.currentTime = percent * duration;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time - minutes * 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <div className="voice-message-container">
      <h2 className='library__title'>манифест нечто</h2>
      <div className="voice-message-player-container">
        <audio
          ref={audioRef}
          src={audioFile}
          type="audio/mpeg"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <div className="voice-message-progress-bar" onClick={handleProgressBarClick}>
          <div
            className="voice-message-progress-bar-filled"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="voice-message-controls">
          <button className="voice-message-play-pause" onClick={handlePlayClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="voice-message-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
}



export default AudioComponent;

