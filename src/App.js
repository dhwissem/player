import React, { Component } from 'react';
import axios from 'axios';

import Player from './components/player';

import './App.css';

const BASE_URL = 'http://localhost:8085/';

class App extends Component {

  state = {
    tracks: [],
    currentTrack: 0,
    currentTime: 0,
    isPlaying: false
  };

  componentDidMount() {
    axios.get(BASE_URL + 'tracks.json')
      .then(response => this.setState({
        tracks: response.data
      }));
  }

  handlePlay = (index) => {

    console.log("player num: " + index);
  }

  render() {
    const { tracks, currentTrack } = this.state;
    const currentSource = tracks.length && (BASE_URL + tracks[currentTrack].track_file);

    return tracks.length && (
        <div className="App">
          <div className="headline"> Online Music Player</div>
          <div className="playersList">
            {
              tracks.map((track, index) => {
                return (
                  <div key={track.track_id}>
                    <Player index={index} track={track} onPlay={this.handlePlay}/>
                  </div>)
              })
            }
          </div>
          <audio id="audio">
            <source src={currentSource} />
          </audio>
        </div>
      );
  }
}

export default App;
