import React, { useEffect, useState } from 'react';
import './projects.css';

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  return (
    <div className="container">
      <div className="projects">
        <h1 className="projectsTitle" style={{ transform: `translateY(calc(10vh - ${scrollPosition}px))` }}>
          Here are some of my projects
        </h1>

        <div className="project">
          <div className="phoneWrapper">
            <div className="phone" style={{ transform: `translateX(calc(40vh - ${scrollPosition}px))` }}>
              <img src={require('../../data/phone.png')} alt="" />
              <div className="phoneScreen">
                <img src="./img/phoneApp.png" alt="" className="phoneApp" />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">NotBooking.com</h1>
              <p className="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae quia natus et iste earum
                ab fugiat eum ipsam, illum vitae nihil quasi recusandae? Nesciunt laudantium recusandae illo veritatis
                possimus! Accusamus repudiandae quia natus et iste earum ab fugiat eum ipsam, illum vitae nihil quasi
                recusandae? Nesciunt laudantium recusandae illo veritatis possimus! laudantium recusandae illo veritatis
                possimus! recusandae illo veritatis.
              </p>
              <button className="projectButton">Learn More</button>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="phoneWrapper">
            {/* <div className="laptop" style={{ transform: `translateX(calc(160vh - ${scrollPosition}px))` }}> */}
            <div className="laptop" style={{ transform: `translateX(calc(${scrollPosition}px - 130vh ))` }}>
              <img src={require('../../data/laptop.png')} alt="" />
              <div className="laptopScreen">
                <img src={require('../../data/laptop.png')} alt="" className="laptopApp" />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Ecommerce</h1>
              <p className="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae quia natus et iste earum
                ab fugiat eum ipsam, illum vitae nihil quasi recusandae? Nesciunt laudantium recusandae illo veritatis
                possimus! Accusamus repudiandae quia natus et iste earum ab fugiat eum ipsam, illum vitae nihil quasi
                recusandae? Nesciunt laudantium recusandae illo veritatis possimus! laudantium recusandae illo veritatis
                possimus! recusandae illo veritatis.
              </p>
              <button className="projectButton">Learn More</button>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="phoneWrapper">
            <div className="phone" style={{ transform: `translateX(calc(230vh - ${scrollPosition}px))` }}>
              <img src={require('../../data/phone.png')} alt="" />
              <div className="phoneScreen">
                <img src={require('../../data/phone.png')} alt="" className="phoneApp" />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Delivery App</h1>
              <p className="projectDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae quia natus et iste earum
                ab fugiat eum ipsam, illum vitae nihil quasi recusandae? Nesciunt laudantium recusandae illo veritatis
                possimus! Accusamus repudiandae quia natus et iste earum ab fugiat eum ipsam, illum vitae nihil quasi
                recusandae? Nesciunt laudantium recusandae illo veritatis possimus! laudantium recusandae illo veritatis
                possimus! recusandae illo veritatis.
              </p>
              <button className="projectButton">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
