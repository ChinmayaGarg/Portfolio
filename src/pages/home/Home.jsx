import React from 'react';
import { useState } from 'react';
import PreLoader from '../preLoader/PreLoader';
import Profile from '../profile/Profile';

const Home = () => {
  const initialPreLoaderState = 'flex';
  const initialProfileState = 'none';
  const [displayPreLoader, setDisplayPreLoader] = useState(initialPreLoaderState);
  const [displayProfile, setDisplayProfile] = useState(initialProfileState);
  return (
    <>
      <PreLoader
        displayPreLoader={displayPreLoader}
        setDisplayProfile={setDisplayProfile}
        setDisplayPreLoader={setDisplayPreLoader}
      />
      <Profile displayProfile={displayProfile} />
    </>
  );
};

export default Home;
