import React  from 'react';
import './App.css';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router,Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

import Home from './screens/Home';
//import About from './screens/About';
import Projects from './screens/Projects';
//import Login from './screens/Login';
import SighUp from './screens/SighUp';
import NavBarElement from './components/NavBarElement';
import Intro from './avagce/introduce';
import Movie from './avagce/movie';

// 페이지들
import Board from './views/Board';
import Form from './views/Form';
import View from './views/View';
import Login from './views/Login';
// 인증 모듈
import auth from './auth';
// 인증 확인해서 로그인 안되었을 경우 /login으로 리다이렉션하는 커스텀 함수
function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => auth.loggedIn === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default class App extends React.Component {
	  constructor(props) {
		super(props)
		auth.chkAuth() // 인증 확인
	} 

	render() {
		return (
    <>
			<Container>
				<Row>
					<Col>
						{/* 라우팅 */}
          
            <NavBarElement/>
           
            
						<Switch>
                  <Route exact path="/" component={Home}/>
              <Route  exact path="/About" component={Intro}/>
              <Route  exact path="/Movie" component={Movie}/>
              <Route  exact path="/Projects" component={Projects}/>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute exact path="/SighUp" component={SighUp}/>
							<PrivateRoute exact path='/board' component={Board} />
							<PrivateRoute exact path='/add' component={Form} />
							<PrivateRoute exact path='/edit/:id' component={Form}/>
							<PrivateRoute exact path='/view/:id' component={View}/>
							
						</Switch>
            
            </Col>
				</Row>
			</Container>
          
            
					
		</>)
	}
}
/*
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
*/