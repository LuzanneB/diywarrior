import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Overlay from './components/Overlay';
import Icons from './components/Icons';
import Footer from './components/Footer'


function App() {
  return (
  <div>
   <NavBar />
   <Overlay />
   <Icons />
   <Footer />

  </div>
  );
}

export default App;
