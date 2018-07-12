import React from 'react';

import './track-information.css';

const TrackInformation = ({trackTitle, artistName}) => {

  return (
    <div className="track-information">
      <div className="track-name">{trackTitle}</div>
      <div className="artist-name">{artistName}</div>
    </div>
  )
};

export default TrackInformation;
