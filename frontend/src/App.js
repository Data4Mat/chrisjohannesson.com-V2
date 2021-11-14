import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
