import React from "react";
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AboutMe from './components/screens/AboutMe'
import MyTown from './components/screens/MyTown'


function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<AboutMe />} /> 
            <Route path ="/aboutme" element={<AboutMe/>} />
            <Route path="/mytown" element={<MyTown/>} />
          </Routes>
    </BrowserRouter>

  );
}

export default App;
