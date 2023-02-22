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
import Movie from './avagce/movie';

import LoginPage from "./pages/Login"; // 로그인 페이지 Import
import Homemanage from "./pages/Home"; // 로그인 후 회원정보를 관리하는 페이지 Import
import Register from "./pages/Register"; // 회원가입 페이지 Import
import Forgot from "./pages/Forgot"; //아이디/비밀번호 찾기 페이지 import
import Callback from "./pages/Callback"; //네이버로그인 콜백페이지
import Address from "./pages/Address"; // 주소검색 페이지
import Ipopup from "./pages/Ipopup"; // 주소검색 페이지
import Mpopup from "./pages/Mpopup"; // 주소검색 페이지


function App() {
  return (
    <Router>
      <NavBarElement/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<Intro/>}/>
        <Route path="/Movie" element={<Movie/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SighUp" element={<SighUp/>}/>

        <Route exact path="/LoginPage" element={<LoginPage/>} />
      <Route exact path="/management" element={<Homemanage/>} />
      <Route exact path="/management-callback" element={<Callback/>} />
      <Route exact path="/register" element={<Register/>} />
      
      <Route exact path="/update" element={<Register info={true} />} />
      <Route exact path="/forgot" element={<Forgot/>} />
      <Route exact path="/address" element={<Address/>} />
      <Route exact path="/ipopup" element={<Ipopup/>} />
      <Route exact path="/mpopup" element={<Mpopup/>} />
      </Routes>
    </Router>
  );
}

export default App;
