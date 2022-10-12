import React from 'react';
import './progressBar.css';
const ProgressBar = ({ gif }) => {
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
    <div class="progressBar" style={{ backgroundColor: gif === 5 && 'gray' }}>
      <div class="progressBarFullShadow">
        <div class="progressBarFull" style={{ backgroundColor: bcg }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
