import React from 'react';
import { useState } from 'react';
import RainbowBtn from '../rainbowBtn/RainbowBtn';
import './progressBar.css';

const ProgressBar = ({ gif, setDisplayProfile, setDisplayPreLoader }) => {
  const [display, setDisplay] = useState('initial');

  let bcg = '';
  switch (gif) {
    case 1:
      bcg = '#e93040';
      break;
    case 2:
      bcg = '#7b7071';
      break;
    case 3:
      bcg = '#1679b9';
      break;
    case 4:
      bcg = 'gray';
      break;
    case 5:
      bcg = '#fff';
      break;
    default:
      bcg = '#fff';
  }
  return (
    <>
      <div
        className="progressBar"
        style={{
          backgroundColor: gif === 5 && 'gray',
          display: display
        }}
      >
        <div className="progressBarFullShadow">
          <div className="progressBarFull" style={{ backgroundColor: bcg }}></div>
        </div>
      </div>
      <RainbowBtn
        setProgressBarDisplay={setDisplay}
        gif={gif}
        setDisplayProfile={setDisplayProfile}
        setDisplayPreLoader={setDisplayPreLoader}
      />
      ;
    </>
  );
};

export default ProgressBar;
