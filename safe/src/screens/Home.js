import Container from 'react-bootstrap/Container';
import React from 'react'
import '../home.css';

const Home = () => {
  return (
    <>
    <div className='main'>
      <Container>
        <div className='test'>
        <div className='safeList'>
          <ul>
            <li><h4>나에게 필요한 안전교육은?</h4></li>
          </ul>
        <div className='jop'>
          <dl>
            <dt>사업주</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>근로자</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>관리감독자</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>직무교육 대상자</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>특수형태 근로자</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>학생</dt>
            <dd></dd>
          </dl>
        </div>
        </div>
        <div className='rightcont'>
          <ul>
            <li>fds</li>
            <li>fds</li>
          </ul>
        </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Home