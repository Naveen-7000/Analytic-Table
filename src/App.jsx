import React,{ useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Analytics from './Pages/Analytics/Analytics';
import './App.css'

function App() {

  return (
    <div className="App">
      <nav>
          <a className='navitem' href={'/'}>Home</a>
          <a className='navitem' href={'/analytics'}>Analytics</a>
        </nav>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/analytics' element={<Analytics />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
