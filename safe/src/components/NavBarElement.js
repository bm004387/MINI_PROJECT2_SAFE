import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Form from 'react-bootstrap/Form';
import "../header.css";

function NavBarElement() {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <div className='iconGroup'>

      <a href='#!'><img src="/images/icon/naver_icon.svg" alt='네이버 아이콘' title='네이버로 바로가기'/></a>
      <a href='#!'><img src="/images/icon/facebook_icon.svg" alt='페이스북 아이콘' title='페이스북으로 바로가기'/></a>
      <a href='#!'><img src="/images/icon/twitter_icon.svg" alt='트위터 아이콘' title='트위터로 바로가기'/></a>
      <a href='#!'><img src="/images/icon/youtube_icon.svg" alt='유튜브 아이콘' title='유튜브로 바로가기'/></a>
      <a href='#!'><img src="/images/icon/instargram_icon.svg" alt='인스타그램 아이콘' title='인스타그램으로 바로가기'/></a>

      
      </div>
      <div>
        <a href='/login'>로그인</a> | 
       <a href='/register'>회원가입</a>
      </div>
    </Container>
    </Navbar>
    <Navbar bg="light" expand="lg" className='header'>
      <Container>
        <Navbar.Brand href="/" className="logo"><img src='/images/logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Movie">Movie</Nav.Link>
            <Nav.Link href="/Projects">Project</Nav.Link>
            <NavDropdown title="게시판" id="basic-nav-dropdown">

              <NavDropdown.Item href="/board">게시글 작성하기</NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="교육 과정 검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='shBtn'>검색</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavBarElement;