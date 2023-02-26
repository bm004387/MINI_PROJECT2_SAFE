import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import '../home.css';
import $ from "jquery";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
            <div className='job'>
              <dl className='job1'>
                <dt>사업주</dt>
                <dd></dd>
              </dl>
              <dl className='job2'>
                <dt>근로자</dt>
                <dd></dd>
              </dl>
              <dl className='job3'>
                <dt>관리감독자</dt>
                <dd></dd>
              </dl>
              <dl className='job4'>
                <dt>직무교육 대상자</dt>
                <dd></dd>
              </dl>
              <dl className='job5'>
                <dt>특수형태 근로자</dt>
                <dd></dd>
              </dl>
              <dl className='job6'>
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
              <Tabs>
                <Tab eventKey="notice" title="공지사항" className='notice'>
                  <ul>
                    <li>2024년 안전보건교육기관 평가지표 공표<span className='date'>2023-02-23</span></li>
                    <li>건설업 기초안전보건교육 안내문 게시<span className='date'>2023-02-23</span></li>
                    <li>'24년 기관평가 지표 개편(안) 공지<span className='date'>2023-02-23</span></li>
                    <li>2022년 안전보건교육 안내서 안내<span className='date'>2023-02-23</span></li>
                    <li>"중대재해 감축 로드맵" 수립을 위한 토론회 안내<span className='date'>2023-02-23</span></li>
                    <li>건설업 기초안전보건교육 이수자 개인정보 정정 절차 안내<span className='date'>2023-02-23</span></li>
                  </ul>
                </Tab>
                <Tab eventKey="FAQ" title="자주묻는 질문" className='notice'>
                  <ul>
                    <li><a>2023년도 안전보건교육사업 일선기관 대표 연락처</a><span className='date'>2023-02-23</span></li>
                    <li><a>방문취업(H-2) 비자 외국인입니다. 건설업 취업인정증을 갖고 있으면 건설업 기초안전보건교육을 안 받아도 되나요?</a><span className='date'>2023-02-23</span></li>
                    <li><a>안전보건교육규정(고용노동부고시 제2020-129호)</a><span className='date'>2023-02-23</span></li>
                    <li><a>유해ㆍ위험작업의 취업 제한에 관한 규칙(고용노동부령)(제00305호)</a><span className='date'>2023-02-23</span></li>
                    <li><a>특수형태근로종사자 안전보건교육 의무 시행 알림</a><span className='date'>2023-02-23</span></li>
                    <li><a>5대 법정의무교육 한눈에 보기</a><span className='date'>2023-02-23</span></li>
                  </ul>
                </Tab>
              </Tabs>
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
  $(".job1").delay(100).animate({ opacity: 1, top: 0 }, 600, "swing")
  $(".job2").delay(200).animate({ opacity: 1, top: 0 }, 600, "swing")
  $(".job3").delay(300).animate({ opacity: 1, top: 0 }, 600, "swing")
  $(".job4").delay(400).animate({ opacity: 1, top: 0 }, 600, "swing")
  $(".job5").delay(500).animate({ opacity: 1, top: 0 }, 600, "swing")
  $(".job6").delay(600).animate({ opacity: 1, top: 0 }, 600, "swing")
  $(".rightcont ul li:nth-child(1)").delay(100).animate({ opacity: 1, right: 0}, 600, "swing")
  $(".rightcont ul li:nth-child(2)").delay(400).animate({ opacity: 1, right: 0}, 600, "swing")
  
})