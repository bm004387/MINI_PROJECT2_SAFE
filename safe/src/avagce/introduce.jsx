
import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireExtinguisher  } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import Image from 'react-bootstrap/Image';
import Movie from './movie';
import { useNavigate } from 'react-router-dom';
import './intro.css';


class Intro extends React.Component{
    render(){
    
        return(
              <>
                    
                   
        
          <Container className="Con1">

          <h1>회사소개</h1>
          <Row md={4}>
          <Col sm={4}>

                          <div className="imgwap mission"><FontAwesomeIcon icon={faFireExtinguisher} className="icon" /></div>
                          <h2>Sacrifice</h2>
                          <p>재해가 일어난 지역을 도웁니다.</p>
          </Col>       
         
          <Col sm={4}>
                          <div className="imgwap product"><FontAwesomeIcon icon={faHelmetSafety} className="icon" /></div>
                          <h2>Adversity</h2>
                          <p>재난 및 사고가 일어난 정보를 알려드립니다.</p>
           </Col>
         
           <Col sm={4}>
                          <div className="imgwap testimonial"><FontAwesomeIcon icon={faPerson} className="icon" /></div>
                          <h2>Folk</h2>
                          <p>사람들을 돕습니다</p>
               </Col>
               <Col sm={4}>
                          <div className="imgwap statistic"><FontAwesomeIcon icon={faHandsPraying} className="icon" /></div>
                          <h2>Exit</h2>
                          <p>사람들이 재난을 극복하고 일상생활로 돌아갈수 있도록 지원합니다.</p>
            </Col>
                        
                       
                         
                          </Row>
                    </Container>
                    <Container className="Con2">
                                        <h1>활동 자료</h1>
                                        <Row md={2}>
                                        <Col sm={10}>
                                        <div className="event_box_wap event_animate_left">
                                  <div className="intro_img01">
                                     <Image src="images/intro/intro01.jpg" class="img-responsive" alt="intro_img01" fluid />
                                  
                                  </div>
                                  <div className="intro_img01_caption">
                                      <h1>네팔 지진 현장</h1>
                                      
                                  </div>
                              </div>
                           </Col>
                           <Col sm={10}>
                          
                              <div className="event_box_wap event_animate_right">
                                  <div className="intro_img02">
                                      <Image src="images/intro/intro02.jpg" class="img-responsive" alt="intro_img02" fluid/>
                                  </div>
                                  <div className="intro_img02_caption">
                                      <h1>네팔 지진 현장</h1>
 
                                 
                              </div>
                          </div>
                          </Col>
                          </Row>
                          <Row md={2}>
                          <Col sm={10}>
                          
                              <div className="event_box_wap event_animate_left">
                                  <div className="intro_img03">
                                      <Image src="images/intro/intro03.jpg" class="img-responsive" alt="" fluid/>
                                  </div>
                                  <div className="intro_img03_caption">
                                      <h1>튀르키예 구호단</h1>
                                     
                                  </div>
                              </div>
                          
                          </Col>
                          <Col sm={10}>
                          
                              <div className="event_box_wap event_animate_right">
                                  <div className="intro_img04">
                                      <Image src="images/intro/intro04.jpg" class="img-responsive" alt="" fluid/>
                                  </div>
                                  <div className="intro_img04_caption">
                                      <h1>수해 복구</h1>
                                      
                                  </div>
                              </div>
                          
                          </Col>
                          </Row>
                 

                      
                    </Container>
                    </>
                    );
                  }
                }

  export default Intro;

