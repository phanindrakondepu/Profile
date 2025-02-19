// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates';
import Internships from './components/Internships';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
