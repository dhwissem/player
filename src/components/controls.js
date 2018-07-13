import React from 'react';

import './controls.css';

const Controls = ({ isPlaying, onPlay, index, onGoBackward, onGoForward }) => {

  let classname = isPlaying ? "fas fa-pause" : "fas fa-play";

  return (
    <div className="controls">
      <div onClick={() => onGoBackward(10)} className="backwards-ten-sec">
        <i className="fas fa-fast-backward"></i>
      </div>
      <div onClick={() => onGoBackward(1)} className="backwards-one-sec">
        <i className="fas fa-backward"></i>
      </div>
      <div onClick={() => onPlay(index)} className="play-pause-btn">
        <i className={classname}></i>
      </div>
      <div onClick={() => onGoForward(1)} className="forwards-one-sec">
        <i className="fas fa-forward"></i>

      </div>
      <div onClick={() => onGoForward(10)} className="forwards-ten-sec">
        <i className="fas fa-fast-forward"></i>
      </div>

    </div>
  )
};

export default Controls;
