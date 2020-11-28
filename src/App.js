import './App.css';
import React, { useState, Component } from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills'
import Contact from './components/Contact';
import { Link, Switch, Route } from 'react-router-dom';
import aboutGlyph from './images/about-glyph.png'
import portfolioGlyph from './images/projects-glyph.png'
import contactGlyph from './images/contact-glyph.png'
import skillsGlyph from './images/skills-glyph.png'

function App() {

  const menuBtn = document.querySelector('.menu-btn');
  const [menuOpen, setMenuOpen] = useState(false);
  if (!menuOpen) {
    menuBtn.classList.add('open');
  } else {
    menuBtn.classList.remove('open')
  }
  console.log(menuOpen)

  return (
    <div className="App">
      <header>
        <Link to="/" className="header-brand">.michael(degori)</Link>

        <nav>
          <ul>
            <li><Link to="/portfolio">.portfolio</Link></li>
            <li><Link to="/about">.about</Link></li>
            <li><Link to="/skills">.skills</Link></li>
            <li><Link to="/contact">.contact</Link></li>
          </ul>
          <Link to="/resume">RESUME</Link>
        </nav>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-btn-burger"></div>
        </div>

      </header>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/portfolio" render={(props) => <Portfolio {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/skills" render={(props) => <Skills {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      </Switch>

      <footer>
        <div className="footer-icon-container">
          <Link to="/portfolio">
            <img src={portfolioGlyph} alt="portfolio" />
            <h4>portfolio</h4>
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link to="/about">
            <img src={aboutGlyph} alt="about me" />
            <h4>about</h4>
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link to="/skills">
            <img src={skillsGlyph} alt="skills" />
            <h4>skills</h4>
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link to="/contact">
            <img src={contactGlyph} alt="hire me" />
            <h4>hire me</h4>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
