import React from 'react';
import './App.css';

import Home from './Pages/Home.js'

import {
  BrowserRouter as Router,
  Route} from 'react-router-dom'



function App() {

    return (
      <Router>
         <div> <Home /> </div>
      </Router>
  )
}

export default App
