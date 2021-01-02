import '../styles/Porfolio.css';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
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
              <p>
                Born out of a love for classic Mario-style platformers, my team
                was on a mission to create a fun homage to the Nintendo Classic.
                The mechanics, visuals and animations were created using no
                external libraries or game engines, and the project was
                primarily coded using Canvas.
              </p>
              <a
                href="https://the-ironhack-breakfast-club.github.io/dino-game/"
                target="_blank"
              >
                <button id="dino-link">Check me out!</button>
              </a>
            </div>
          </div>
          <div className="projects">
            <div className="projects-container">
              <h2>The Rock's Tequila Landing Page</h2>
              <div id="rock-wrapper"></div>
              <p>
                What began as a first collaboration between training Web Devs
                and UX/UIers quickly became an all-consuming passion project.
                Getting to learn the 'ins and outs' of user-experience and
                design was especially exciting. This landing page was made using
                React and incorporates Cocktail DB's API.
              </p>
              <a
                href="https://toningwithteremanatequila.netlify.app/"
                target="_blank"
              >
                <button id="rock-link">Check me out!</button>
              </a>
            </div>
          </div>
          <div className="projects smg-project">
            <div className="projects-container">
              <h2>Unnamed Project</h2>
              <div id="smg-wrapper"></div>
              <p>
                Shiver me timbers piracy snow Letter of Marque wench hornswaggle
                Nelsons folly Yellow Jack lanyard gunwalls. Skysail hempen
                halter careen gibbet execution dock plunder fore Pieces of Eight
                boom fathom. Keelhaul reef come about Jack Ketch yardarm
                man-of-war keel smartly weigh anchor mizzenmast.
              </p>
              <a href="https://smokymountaingetaways.netlify.app/">
                <button id="smg-link">Check me out!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
