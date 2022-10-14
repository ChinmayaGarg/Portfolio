import React from 'react';
import { useState } from 'react';
import './rainbowBtn.css';

const RainbowBtn = ({ setProgressBarDisplay, gif, setDisplayProfile, setDisplayPreLoader }) => {
  const [display, setDisplay] = useState('none');
  const handleClickToEnter = () => {
    setDisplayProfile('flex');
    setDisplayPreLoader('none');
  };
  {
    gif === 5 &&
      setTimeout(() => {
        setProgressBarDisplay('none');
        setDisplay('initial');
      }, 1550);
  }
  return (
    <div className="btnWrapper rainbowBtn" style={{ display: display }}>
      <button className="enterBtn" onClick={() => handleClickToEnter()}>
        Click to Enter
      </button>
      <span></span>
    </div>
  );
};

export default RainbowBtn;
