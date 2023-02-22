import React  from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Login from './screens/Login';
import SighUp from './screens/SighUp';
import NavBarElement from './components/NavBarElement';
import Intro from './avagce/introduce';



function App() {
  return (
    <Router>
      <NavBarElement/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<Intro/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SighUp" element={<SighUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
