import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/home">.michael(degori)</Link>

        <ul>
          <li><Link to="/portfolio">.myWork</Link></li>
          <li><Link to="/About">.aboutMe</Link></li>
          <li><Link to="/home">.contactMe</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
