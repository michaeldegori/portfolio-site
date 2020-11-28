import React from 'react';
import './Home.css'
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import { Link, Switch, Route } from 'react-router-dom';




const Home = (props) => {
  return (
    <div className="home">
      <main>
        <section id="home-title">
          <div id="home-title-container">
            <h1>I create incredible experiences</h1>
            <h3>Web Developer from MIA with speacialties in front && back-end development, functionality and SEO</h3>
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