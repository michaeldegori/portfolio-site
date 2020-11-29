import '../styles/Home.css'
import React from 'react';
import Portfolio from './Portfolio.js';
import About from './About.js';
import Contact from './Contact.js';
import { Link, Switch, Route } from 'react-router-dom';




const Home = (props) => {
  return (
    <div className="home">
      <main>
        <section id="home-title">
          <div id="home-title-container">
            <h1>I create incredible experiences</h1>
            <h3>Web Developer from MIA</h3>
          </div>

        </section>

        <section id="home-portfolio">
          <h2>My Work</h2>
          <h2>- View all work</h2>
          <div id="home-carousel-container">
            <article className="home-projects">
              <a href="">
                <img src="" alt="dinosaur platformer game" />
              </a>
            </article>
            <article className="home-projects">
              <a href="">
                <img src="" alt="celebrity/influencer landing page" />
              </a>
            </article>
            <article className="home-projects">
              <a href="">
                <img src="" alt="untitled project" />
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;