import React from 'react';
import FindMeGithub from '../../components/findMeGithub/FindMeGithub';
import NavBar from '../../components/navBar/NavBar';
import Projects from '../../components/projects/Projects';

const Profile = ({ displayProfile }) => {
  return (
    <div
      style={{
        display: displayProfile,
        flexDirection: 'column'
      }}
    >
      <NavBar />
      <Projects />
      <FindMeGithub />
    </div>
  );
};

export default Profile;
