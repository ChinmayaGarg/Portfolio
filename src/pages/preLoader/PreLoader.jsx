import React from 'react';
import Preloader from '../../components/preloader/Preloader';

const PreLoader = ({ displayPreLoader, setDisplayProfile, setDisplayPreLoader }) => {
  return (
    <div style={{ display: displayPreLoader, height: '100vh' }}>
      <Preloader setDisplayProfile={setDisplayProfile} setDisplayPreLoader={setDisplayPreLoader} />
    </div>
  );
};

export default PreLoader;
