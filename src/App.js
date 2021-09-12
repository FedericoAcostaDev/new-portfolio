import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Header from './components/About/Header';
import ControlledAccordions from './components/Text-img/Text-img';

import './App.css';

const App =() => {
  return (
    
    <div>
       <NavBar />
      <Header />
      <ControlledAccordions />
    </div>
    
  );
}

export default App;
