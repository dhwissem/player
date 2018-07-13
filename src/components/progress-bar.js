import React from 'react';

import './progress-bar.css';

const ProgressBar = ({ percent }) => <div style={{ width: `${percent}%` }} className="progress-bar"></div>

export default ProgressBar;
