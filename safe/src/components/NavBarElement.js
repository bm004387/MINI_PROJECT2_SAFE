import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import styles from "../header.css";

function NavBarElement() {
  return (
    <>
    <div className='loginForm'>
      <div>
      <img/>
      </div>
      <div>
        <a href='#'>로그인</a> | 
        <a>회원가입</a>
      </div>
    </div>
    <Navbar bg="light" expand="lg">
      <Container className={styles.container}>
        <Navbar.Brand href="/" className="logo"><img src='../images/logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Projects">Project</Nav.Link>
            <NavDropdown title="게시판" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">게시글 작성하기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">게시글 보기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">게시글 삭제</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavBarElement;