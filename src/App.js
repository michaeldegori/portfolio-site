import './styles/App.css';
import React, { useState, useRef } from 'react';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import { NavLink, Link, Switch, Redirect, Route } from 'react-router-dom';
import aboutGlyph from './images/about-glyph.png';
import portfolioGlyph from './images/projects-glyph.png';
import contactGlyph from './images/contact-glyph.png';
import skillsGlyph from './images/skills-glyph.png';
import background from './images/background.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef();
  const navLinksRef = useRef();
  const menuBackgroundRef = useRef();
  const headerBrandRef = useRef();
  const portfolioRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const resumeRef = useRef();
  const darkBackgroundRef = useRef();
  const homeRef = useRef();
  const pushContentRef = useRef();

  const openCloseMenu = () => {
    if (!menuOpen) {
      menuBtnRef.current.classList.add('open');
      navLinksRef.current.classList.add('open');
      menuBackgroundRef.current.classList.add('open');
      headerBrandRef.current.classList.add('open');
      darkBackgroundRef.current.classList.add('open');
      homeRef.current.classList.add('open');
      pushContentRef.current.classList.add('open');
      setMenuOpen(true);
    } else {
      menuBtnRef.current.classList.remove('open');
      navLinksRef.current.classList.remove('open');
      menuBackgroundRef.current.classList.remove('open');
      headerBrandRef.current.classList.remove('open');
      darkBackgroundRef.current.classList.remove('open');
      homeRef.current.classList.remove('open');
      pushContentRef.current.classList.remove('open');
      setMenuOpen(false);
    }
  };

  // const scrollToTop = () => {
  //   if (menuOpen) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"
  //     });
  //   }
  // }

  return (
    <div className="App">
      <header>
        <Link to="/home" className="header-brand" ref={headerBrandRef}>
          .michael(degori)
        </Link>

        <div
          className="menu-btn"
          ref={menuBtnRef}
          onClick={() => {
            openCloseMenu();
          }}
        >
          <div className="menu-btn-burger"></div>
        </div>
      </header>

      <section className="menu-background" ref={menuBackgroundRef}>
        <nav>
          <ul className="nav-links-ul" ref={navLinksRef}>
            <li>
              <NavLink
                to="/home"
                id="home-link"
                className="nav-links"
                ref={homeRef}
                activeClassName="highlight"
                onClick={openCloseMenu}
              >
                #home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                id="portfolio-link"
                className="nav-links"
                ref={portfolioRef}
                activeClassName="highlight"
                onClick={openCloseMenu}
              >
                #portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                id="about-link"
                className="nav-links"
                ref={aboutRef}
                activeClassName="highlight"
                onClick={openCloseMenu}
              >
                #about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                id="skills-link"
                className="nav-links"
                ref={skillsRef}
                activeClassName="highlight"
                onClick={openCloseMenu}
              >
                #skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                id="contact-link"
                className="nav-links"
                ref={contactRef}
                activeClassName="highlight"
                onClick={openCloseMenu}
              >
                #contact
              </NavLink>
            </li>
            <li>
              <a
                href="https://res.cloudinary.com/michaeldegori/image/upload/v1609586231/michael-degori-resume.pdf"
                className="nav-links"
                download
              >
                #resume
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="background-wrapper">
        <img src={background} alt="computer background" />
      </div>
      <div
        className="dark-background"
        ref={darkBackgroundRef}
        onClick={openCloseMenu}
      ></div>

      <div className="push-content" ref={pushContentRef}></div>

      <Switch>
        <main>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/portfolio"
            render={(props) => <Portfolio {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/skills"
            render={(props) => <Skills {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
        </main>
      </Switch>

      <div className="" style={{ height: '60px' }}></div>

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
