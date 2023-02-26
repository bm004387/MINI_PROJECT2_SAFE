
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
import { useNavigate } from 'react-router-dom';
import './faq.css';
import{useState} from 'react'


function App(){
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return(
    <div className='wrapper'>
      <div className='accordian'>
        {data.map((item, i) => {
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : 
              '+'}</span>
            </div>
            <div 
                className={
                  selected === i ? 'content show' : 'content'} 
                  >
                    {item.answer}
                </div>
            </div>
        })}
        </div>
    </div>
        )
    }

    const data =[
          
      {question: 'Q.1) 특수형태근로종사자 안전보건교육 의무 시행 알림',
       answer:
       '2020년 1월 16일부터, 건설장비(27종) 운전자, 골프장 캐디, 택배원, 퀵서비스 배달원, 대리운전자 로부터 노무를 제공받는 자는 최초노무 제공 시 교육과 특별 교육을 실시하여야 함을 알려드리며 자세한 사항은 첨부를 참조하시기 바랍니다.',
    },
      {question: 'Q.1) 특수형태근로종사자 안전보건교육 의무 시행 알림',
      answer:
      '2020년 1월 16일부터, 건설장비(27종) 운전자, 골프장 캐디, 택배원, 퀵서비스 배달원, 대리운전자 로부터 노무를 제공받는 자는 최초노무 제공 시 교육과 특별 교육을 실시하여야 함을 알려드리며 자세한 사항은 첨부를 참조하시기 바랍니다.',
    },

    ]

  export default App;

      
      
      
  
  
  
 