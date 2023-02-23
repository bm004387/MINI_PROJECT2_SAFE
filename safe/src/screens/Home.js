import Container from 'react-bootstrap/Container';
import React from 'react'
import '../home.css';

const Home = () => {
  return (
    <>
    <div className='main'>
      <Container>
        <div className='test'>
          <div className='topcont'>
            <ul>
              <li><h4>나에게 필요한 안전교육은?</h4></li>
              <li><span>아래 교육유형을 선택하시면 필요하신 교육과정</span>을 확인하실 수 있습니다</li>
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
      <Container>
        <div className='ftcont'>
          <div className='ftcont1'>
            <div className='imgcont'>
              <img src='/check_icon.svg' alt='테스트'/>
            </div>
            <div className='guide'>
              <div className='guide_item1'>
                <p>테스트1</p>
              </div>
              <div className='guide_item2'>
                <p>테스트2</p>
              </div>
            </div>
          </div>
          <div className='ftcont2'>
            <div className='ntcfaq'>
              <ul>
                <li><a>공지사항</a></li>
                <li><a>자주묻는질문들</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Home