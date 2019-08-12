import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Overlay from './components/Overlay';
import Icons from './components/Icons';
import Footer from './components/Footer'
import Project from './components/Project';


function App() {
  return (
  <div>
   <NavBar />
   <Overlay />
   <Icons />
   <Footer />
   <Project />
  </div>
  );
}

export default App;
