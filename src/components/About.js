import '../styles/About.css'
import React from 'react';
import headshot from '../images/headshot.jpg'

const About = () => {
  return (
    <div>
      <div className="about">
        <section id="about-title">
          <div id="about-title-container">
            <h1>About me</h1>
            <h3>About this guy!</h3>
          </div>
        </section>

        <section id="about-section">
          <div className="about-container">
            <img src={headshot} alt="headshot" />
            <h3>Hey there!</h3>
            <p>
              I'm Michael DeGori, a web developer with a background of music and hospitality management. I specialize in front-end development with an emphasis on React. Fueled by persistence and a competitive spirit, I'm always seeking challenges to try and experience new things through all facets of life.
            </p><br />
            <p>
              As an avid 'learner', I absolutely <i>love</i> learning. I have a passion for learning about different cultures, ideas, skills and practices. I believe finding the right perspective is the key to discovering the beauty and potential in all things.
            </p><br />
            <p>
              When it comes to web development, these qualities allow me to express my creativity while always pushing the boundaries of what I am currently capable of.
            </p><br />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;