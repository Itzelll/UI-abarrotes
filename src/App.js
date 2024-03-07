// App.js
import React from 'react';
import Navbar from './components/navbar';
import Inicio from './components/home';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="inicio">        
        <Inicio/>
      </div>
    </div>
  );
};

export default App;
