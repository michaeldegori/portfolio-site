import '../styles/Porfolio.css'
import React from 'react';
import dinoStill from '../images/dino-game-still.png';
import rockStill from '../images/rock-site-still.png';
import defaultStill from '../images/project-default.jpeg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <main>
        <section id="portfolio-title">
          <div id="portfolio-title-container">
            <h1>My Projects</h1>
            <h3>Projects created at Ironhack</h3>
          </div>
        </section>

        <section id="portfolio-section">
            <div id="portfolio-carousel-container">
              <div className="projects">
                <div className="projects-container">
                  <h2>Dino Platformer</h2>
                  <div id="dino-wrapper"></div>
                  <p>Born out of a love for classic Mario-style platformers, my team was on a mission to create a fun homage to the Nintendo Classic. The mechanics, visuals and animations were created using no external libraries or game engines, and the project was primarily coded using Canvas.</p>
                  <button id="dino-link">Check me out!</button>
                </div>
              </div>
              <div className="projects">
                <div className="projects-container">
                  <h2>The Rock's Tequila Landing Page</h2>
                  <div id="rock-wrapper"></div>
                  <p>What began as a first collaboration between training Web Devs and UX/UIers quickly became an all-consuming passion project. Getting to learn the 'ins and outs' of user-experience and design was especially exciting. This landing page was made using React and incorporates Cocktail DB's API.</p>
                  <button id="rock-link">Check me out!</button>
                </div>
              </div>
              <div className="projects default-project">
                <div className="projects-container">
                  <h2>Unnamed Project</h2>
                  <div id="default-wrapper"></div>
                  <button id="default-link">Check me out!</button>
                  <p></p>
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;