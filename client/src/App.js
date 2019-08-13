import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';



function App() {
  return (
    <Router>
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </div>
  </Router>
  );
}

export default App;
