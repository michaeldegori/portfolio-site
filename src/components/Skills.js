import '../styles/Skills.css'
import React from 'react';
import jsLogo from '../images/js-logo.png';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import expressLogo from '../images/express-logo.png';
import nodeLogo from '../images/node-logo.png';
import mongoLogo from '../images/mongodb.png';
import pythonLogo from '../images/python-logo.png';
import reactLogo from '../images/react-logo.png';


const Skills = () => {
  return (
    <div>
      <div className="skills">
        <section id="skills-title">
          <div id="skills-title-container">
            <h1>Skills</h1>
            <h3>Skills && technologies</h3>
          </div>
        </section>

        <section id="skills-section">
          <div className="skills-container">
            <img src="" alt="" />
            <h2>JavaScript</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;