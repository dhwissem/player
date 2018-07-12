import React from 'react';

import TrackInformation from './track-information';
import Controls from './controls';

const Player = ({ index, track, onPlay }) => {

  const { track_title, artist_name } = track;

  return (
    <div className="player">
      <TrackInformation trackTitle={track_title} artistName={artist_name} />
      <Controls isPlaying={false} onPlay={onPlay} index={index} />
    </div>
  )
};

export default Player;
