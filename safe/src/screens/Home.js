import Container from 'react-bootstrap/Container';
import React from 'react'
import '../home.css';

const Home = () => {
  return (
    <>
    <div className='main'>
      <Container>
        <div className='safeList'>
          <ul>
            <li><h4>나에게 필요한 안전교육은?</h4></li>
          </ul>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Home