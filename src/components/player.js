import React from 'react';

import TrackInformation from './track-information';
import Controls from './controls';
import ProgressBar from './progress-bar';

const Player = ({ index, track, onPlay, isPlaying, onGoBackward, onGoForward, percent }) => {

  const { track_title, artist_name } = track;


  return (
    <div className="player">
      <TrackInformation trackTitle={track_title} artistName={artist_name} />
      <Controls isPlaying={isPlaying} onPlay={onPlay} index={index} onGoForward={onGoForward}
                onGoBackward={onGoBackward} />
      <ProgressBar percent={(isPlaying && percent )|| 0} />
    </div>
  )
};

export default Player;
