import React, { useEffect, useState } from 'react';
import './projects.css';
import useWindowDimensions from '../../utils/useWindowDimensions';

const Projects = () => {
  const { height, width } = useWindowDimensions();
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
            <div className="phone" style={{ transform: `translateX(calc(60vh - ${scrollPosition}px))` }}>
              <img src={require('../../data/phone.png')} alt="" />
              <div className="phoneScreen">
                <img src={require('../../data/bookingapp.png')} alt="" className="phoneApp" />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Hotel Booking</h1>
              <p className="projectDesc">
                Developing a hotel booking app with JWT Authentiction and Authorization. <br />
                Features include: CRUD operations on hotel DB by admin and hotel owner, CRUD operations on user DB,
                Filtering hotels based on rooms available, no. of guests, age of children, storing encrypted passwords
                in DB, REST APIs and many more.
                <br />
                <b>Tech Stack:</b> ReactJS, NodeJS, JS, MongoDB, ExpressJS, Redux, REST
              </p>
              <a href="https://notbooking.vercel.app/" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="phoneWrapper">
            <div
              className={width > 650 ? 'laptop' : 'phone'}
              style={{ transform: `translateX(calc(${scrollPosition}px - 160vh ))` }}
            >
              <img src={width > 650 ? require('../../data/laptop.png') : require('../../data/phone.png')} alt="" />
              <div className={width > 650 ? 'laptopScreen' : 'phoneScreen'}>
                <img src={require('../../data/ecom.png')} alt="" className={width > 650 ? 'laptopApp' : 'phoneApp'} />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Ecommerce</h1>
              <p className="projectDesc">
                Developing an Ecommerce store that will allow authenticated and auhtorized user to add / delete / update
                / retrieve information for products. Some features include cart operations, wishlist management,
                deleting user, making a user admin, filtering products based on various properties, single product page
                and zoom-in page, shop now option, and many more.
                <br />
                <b>Tech Stack:</b> ReactJS, NodeJS, JS, MongoDB, ExpressJS, Redux, REST
              </p>
              <a href="https://chinecommerce.vercel.app/" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="phoneWrapper">
            <div className="phone" style={{ transform: `translateX(calc(255vh - ${scrollPosition}px))` }}>
              <img src={require('../../data/phone.png')} alt="" />
              <div className="phoneScreen">
                <img src={require('../../data/foodapp.jpg')} alt="" className="phoneApp" />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Delivery App</h1>
              <p className="projectDesc">
                Developed a Food App like Uber Eats which allows user to search, view and favourite their food items
                with map integration and Firebase google Authentication.
                <br /> <b>Tech Stack:</b> React-native, Styled-components, Javascript, FireBase.
              </p>
              <a href="https://github.com/ChinmayaGarg/MealsToGo" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
