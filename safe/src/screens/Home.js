import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import '../home.css';
import $ from "jquery";

const Home = () => {
  return (
    <>
    <div className='main'>
        <div className='maintop'>
      <Container>
          <div className='test'>
            <div className='topcont'>
              <ul>
                <li><h4>나에게 필요한 안전교육은?</h4></li>
                <li><span>아래 교육유형을 선택하시면 필요하신 교육과정</span>을 확인하실 수 있습니다</li>
              </ul>
            <div className='jop'>
              <dl className='delay'>
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
                <li><a href='#' className='ratio'>개별사업장<br></br> 안전보건교육</a></li>
                <li><a href='#' className='ratio'>건설업 기초안전<br></br> 보건교육</a></li>
              </ul>
            </div>
          </div>
      </Container>
        </div>
      <Container>
        <div className='ftcont'>
          <div className='ftcont1'>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={'/images/Carousel_1.png'}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={'/images/Carousel_2.jpg'}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={'/images/Carousel_3.jpg'}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
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
                <li><a href='a'>공지사항</a>
                  <div className='notice'>
                    <ul>
                      <li>2024년 안전보건교육기관 평가지표 공표<span className='date'>2023-02-23</span></li>
                      <li>건설업 기초안전보건교육 안내문 게시<span className='date'>2023-02-23</span></li>
                      <li>'24년 기관평가 지표 개편(안) 공지<span className='date'>2023-02-23</span></li>
                      <li>2022년 안전보건교육 안내서 안내<span className='date'>2023-02-23</span></li>
                      <li>"중대재해 감축 로드맵" 수립을 위한 토론회 안내<span className='date'>2023-02-23</span></li>
                      <li>건설업 기초안전보건교육 이수자 개인정보 정정 절차 안내<span className='date'>2023-02-23</span></li>
                    </ul>
                  </div>
                </li>
                <li><a href='a'>자주묻는질문들</a>
                  <div className='notice'>
                    <ul>
                      <li>2024년 안전보건교육기관 평가지표 공표<span className='date'>2023-02-23</span></li>
                      <li>건설업 기초안전보건교육 안내문 게시<span className='date'>2023-02-23</span></li>
                      <li>'24년 기관평가 지표 개편(안) 공지<span className='date'>2023-02-23</span></li>
                      <li>2022년 안전보건교육 안내서 안내<span className='date'>2023-02-23</span></li>
                      <li>"중대재해 감축 로드맵" 수립을 위한 토론회 안내<span className='date'>2023-02-23</span></li>
                      <li>건설업 기초안전보건교육 이수자 개인정보 정정 절차 안내<span className='date'>2023-02-23</span></li>
                    </ul>
                  </div>
                </li>
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

$(function(){
  $(".delay").delay(1000).animate({ opacity: 0.8, top: -100 }, 600, "swing")
})