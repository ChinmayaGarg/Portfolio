import React from 'react';
import { useState } from 'react';
import './preloader.css';

const Preloader = () => {
  const [gif, setGif] = useState(1);

  const changeGif = () => {
    setTimeout(function () {
      setGif(gif + 1);
    }, 1500);
  };

  let bcg = '';

  switch (gif) {
    case 1:
      bcg = '#f4aa3c';
      break;
    case 2:
      bcg = '#fdfdfd';
      break;
    case 3:
      bcg = '#84bd00';
      break;
    case 4:
      bcg = '#f96b8d';
      break;
    case 5:
      bcg = '#000';
      break;
    default:
      bcg = '#fff';
  }

  return (
    <div className="container">
      <div className="Wrapper" style={{ backgroundColor: bcg }}>
        <div className="loaderWrapper">
          <img src={require(`../../data/${gif}.gif`)} alt="" />
        </div>
        {gif < 5 && changeGif()}
      </div>
    </div>
  );
};

export default Preloader;
