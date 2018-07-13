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
    isPlaying: false,
    percent: 0
  };

  componentDidMount() {
    axios.get(BASE_URL + 'tracks.json')
      .then(response => this.setState({
        tracks: response.data
      }));
  }

  handleGoForward = (value) => {
    const audio = document.getElementById('audio');
    const timestamp = Math.floor(audio.currentTime) + value;
    audio.currentTime = timestamp;
  };

  handleGoBackward = (value) => {
    const audio = document.getElementById('audio');
    const timestamp = Math.floor(audio.currentTime) - value;
    audio.currentTime = timestamp;
  }

  handlePlay = (index) => {
    const audio = document.getElementById('audio');

    const { isPlaying, currentTrack } = this.state;

    if (index !== currentTrack) {
      this.setState({
        currentTrack: index,
        isPlaying: !isPlaying
      }, () => {
        audio.load();
      })
    }

    if (!isPlaying) {
      this.setState({
        isPlaying: true
      }, () => {
        audio.play();
      });

    } else {
      this.setState({
        isPlaying: false
      }, () => {
        audio.pause();
      });
    }

    setInterval(() => {
      let percent = 0;
      const duration = Math.floor(audio.duration);
      const timestamp = Math.floor(audio.currentTime);

      percent = (timestamp / duration) * 100;
      this.setState({
        percent
      })
    }, 100);
  }

  render() {
    const { tracks, currentTrack, isPlaying, percent } = this.state;
    const currentSource = tracks.length && (BASE_URL + tracks[currentTrack].track_file);

    return tracks.length && (
        <div className="App">
          <div className="headline"> Online Music Player</div>
          <div className="playersList">
            {
              tracks.map((track, index) => {
                return (
                  <div key={track.track_id} style={{ marginBottom: '30px' }}>
                    <Player index={index} track={track} isPlaying={(index === currentTrack) && isPlaying}
                            onPlay={this.handlePlay}
                            onGoForward={this.handleGoForward}
                            onGoBackward={this.handleGoBackward}
                            percent={percent}
                    />
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
