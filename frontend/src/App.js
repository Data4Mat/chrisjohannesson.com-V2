import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
