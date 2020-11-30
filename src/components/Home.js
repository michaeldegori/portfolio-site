import '../styles/Home.css'
import React from 'react';
import dinoStill from '../images/dino-game-still.png'
import rockStill from '../images/rock-site-still.png'
import defaultStill from '../images/project-default.jpeg'




const Home = (props) => {
  return (
    <div className="home">
      <main>
        <section id="home-title">
            <div id="home-title-container">
              <h1>I build amazing<br />experiences</h1>
              <h3>Web Developer from MIA</h3>
            </div>
        </section>

        <section id="home-portfolio">
          <div id="home-portfolio-container">
            <div id="home-port-title-container">
              <h2>My Work</h2>
              <h2>- View All Work</h2>
            </div>
            <div id="home-carousel-container">
              <article id="dino-still" className="home-projects">
                <a href=""></a>
              </article>
              <article id="rock-still" className="home-projects">
                <a href=""></a>
              </article>
              <article id="default-still" className="home-projects">
                <a href=""></a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;