
import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

class Intro extends React.Component{
    render(){
        return(
              
                    
          <Container>

          <h1>About Our Organization</h1>
          <Row md={4}>
          <Col sm={4}>

                          <div className="imgwap mission"><FontAwesomeIcon icon={faRocket} classname="Rocket" /></div>
                          <h2>Revenues</h2>
                          <p>Sed do eiusmod tempor incididunt ut labore et.</p>
          </Col>       
         
          <Col sm={4}>
                          <div class="imgwap product"><i class="fa fa-cubes" /></div>
                          <h2>Opportunities</h2>
                          <p>Tempor incididunt ut labore et dolore magna.</p>
           </Col>
         
           <Col sm={4}>
                          <div class="imgwap testimonial"><i class="fa fa-bar-chart-o" /></div>
                          <h2>Growth</h2>
                          <p>Dolore magna aliqua. Ut enim ad minim veniam.</p>
               </Col>
               <Col sm={4}>
                          <div class="imgwap statistic"><i class="fa fa-comments" /></div>
                          <h2>Social Media</h2>
                          <p>Aliqua. Ut enim ad minim veniam, quis nostrud aliqua.</p>
            </Col>
                        
                        <Col xs={1}>
                          
                          <a href="/"><span className="glyphicon glyphicon-chevron-left pre_next" /></a>
                        
                          </Col>
                          <Col xs={9}>

                     
                          <div className="testimonial_text"></div>
                            <Col sm={3}>

                           
                              <img src="images/templatemo_member_01.jpg" className="img-responsive" alt="Business Development Manager" />
                            </Col>
                            
                          </Col>
                          </Row>
                    </Container>
                    );
                  }
                }

  export default Intro;

