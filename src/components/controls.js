import React from 'react';

import './controls.css';

const Controls = ({ isPlaying, onPlay, index }) => {

  let classname = isPlaying ? "fas fa-pause" : "fas fa-play";


  return (
    <div className="controls">
      <div className="backwards-ten-sec">
        <i className="fas fa-fast-backward"></i>
      </div>
      <div className="backwards-one-sec">
        <i className="fas fa-backward"></i>
      </div>
      <div onClick={() => onPlay(index)} className="play-pause-btn">
        <i className={classname}></i>
      </div>
      <div className="forwards-one-sec">
        <i className="fas fa-forward"></i>

      </div>
      <div className="forwards-ten-sec">
        <i className="fas fa-fast-forward"></i>
      </div>

    </div>
  )
};

export default Controls;
