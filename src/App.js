import './App.css';
import React, { useState, useRef } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef()
  const navLinksRef = useRef()
  const menuBackgroundRef = useRef()
  
  const openCloseMenu = () => {
    if(!menuOpen) {
      menuBtnRef.current.classList.add('open');
      navLinksRef.current.classList.add('open');
      menuBackgroundRef.current.classList.add('open');
      setMenuOpen(true);
    } else {
      menuBtnRef.current.classList.remove('open');
      navLinksRef.current.classList.remove('open');
      menuBackgroundRef.current.classList.remove('open');
      setMenuOpen(false);
    }
  }

  return (
    <div className="App">
      <header>
        <Link to="/" className="header-brand">.michael(degori)</Link>

        <div className="menu-btn" ref={menuBtnRef} onClick={openCloseMenu}>
          <div className="menu-btn-burger"></div>
        </div>

        <div className="menu-background" ref={menuBackgroundRef}>
          <nav>
            <ul className="nav-links" ref={navLinksRef}>
              <li><Link to="/portfolio" id="portfolio-link">.portfolio</Link></li>
              <li><Link to="/about" id="about-link">.about</Link></li>
              <li><Link to="/skills" id="skills-link">.skills</Link></li>
              <li><Link to="/contact" id="contact-link">.contact</Link></li>
              <li><Link to="/resume" id="resume-link">RESUME</Link></li>
            </ul>
          </nav>
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
