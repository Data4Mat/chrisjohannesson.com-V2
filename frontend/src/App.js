import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import TestPage from './test-area/TestPage';
import './App.css';

const App = () => {
  /* Using React V6 with Routes instead of Switch */
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/" element={<Home />} exact />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
