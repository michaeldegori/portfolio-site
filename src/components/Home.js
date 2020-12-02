import '../styles/Home.css'
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'



const Home = (props) => {

  const lastTileRef = useRef()

  // useEffect(() => {
  //   lastTileRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     // block: "start",
  //   })
  // }, [])


  return (
    <div className="home">
      <main>
        <section id="home-title">
          <div id="home-title-container">
            <h1>I build<br />amazing<br />experiences</h1>
            <h3>Web Developer from MIA</h3>
          </div>
        </section>

        <section id="home-portfolio">
          <div id="home-portfolio-container">
            <div id="home-port-title-container">
              <h2>My Work</h2>
              <h2 id="view-work"><Link to='/portfolio'>- View All Work</Link></h2>
            </div>
            <div id="home-carousel-container">
              <a href="https://the-ironhack-breakfast-club.github.io/dino-game/" target="_blank">
                <article id="dino-still" className="home-projects"></article>
              </a>
              <a href="https://toningwithteremanatequila.netlify.app/" target="_blank">
                <article id="rock-still" className="home-projects"></article>
              </a>
              <a href="#">
                <article id="default-still" className="home-projects" ref={lastTileRef}></article>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;