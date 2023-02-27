import Accordion from 'react-bootstrap/Accordion';
import './faq.css';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q.1 특수형태근로종사자 안전보건교육 의무 시행 알림</Accordion.Header>
        <Accordion.Body>
        2020년 1월 16일부터, 건설장비(27종) 운전자, 골프장 캐디, 택배원, 퀵서비스 배달원, 대리운전자 로부터 노무를 제공받는 자는 최초노무 제공 시 교육과 특별 교육을 실시하여야 함을 알려드리며 자세한 사항은 첨부를 참조하시기 바랍니다.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="1">
        <Accordion.Header>Q.2 안전보건자료는 어디서 찾나요?</Accordion.Header>
        <Accordion.Body>
        안전보건자료는 다음과 같은 방법으로 찾아보실 수 있습니다. 1. 안전보건공단(www.kosha.or.kr) 안전보건자료실을 통한 자료 검색 [상단 '자료실 - 안전보건자료실'  탭 클릭 시 관련페이지로 넘어가실 수 있습니다] 2. 유튜브(안전보건공단안젤이) 또는 스마트폰 APP(위기탈출 안전보건_안전보건공단)을 통한 동영상 등 자료 검색 3. 미디어 현장배송 서비스를 통한 자료 수령
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Q.3 5대 법정의무교육 한눈에 보기</Accordion.Header>
        <Accordion.Body>
        산업안전보건법 등 관련 법에 따라 사입장에서 필수적으로 실시하여야 하는 법정의무교육에 대한 안내 자료를 게시하오니 사업장 운영에 참조하시기 바랍니다. [5대 법정의무교육] 1. 산업안전보건교육 2. 직장 내 성희롱예방교육 3. 개인정보 보호교육 4. 직장 내 장애인 인식개선교육 5. 퇴직연금교육
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Q.4 스크롤바가 보이지 않거나 화면이 열리지 않는 경우에는 어떻게 하나요?</Accordion.Header>
        <Accordion.Body>
        팝업창의 스크롤바가 보이지 않거나 화면이 열리지 않는 경우 조치 방법 안내드립니다. 1. 도구-인터넷 옵션-보안-신뢰할 수 있는 사이트-안전보건교육포털(www.koshats.or.kr) 추가 2. 도구-호환성 보기 설정-안전보건교육포털 추가 3. 위 조치 이후에도 정상적인 작동이 안될경우에는 크롬(Chrome) 웹브라우저 사용을 권장 드립니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Q.5 안전보건교육 문의는 어디로 하나요?</Accordion.Header>
        <Accordion.Body>
        안전보건교육에 대한 문의는 1644-2275로 전화하시면 인근 공단 일선기관 교육담당자로 전화 연결됨을 알려드립니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Q.6 회원 가입은 어떻게 하나요?</Accordion.Header>
        <Accordion.Body>
        1. 로그인 페이지로 이동합니다. 2. 휴대폰 또는 아이핀 본인인증을 받으시고 약관에 동의 하시면 회원에 가입 됩니다. 3. 휴대폰 본인 인증 후 비밀 번호를 설정 하시면 휴대폰번호와 비밀번호를 이용하면 다음부터 쉽게 로그인 가능 합니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Q.7 안전보건교육 서비스의 비밀번호를 잊었습니다.</Accordion.Header>
        <Accordion.Body>
        1. 로그인 페이지에서 본인인증을 통하여 로그인 합니다. 2. 마이페이지에서 "비밀번호 변경"을 선택 하여 비밀번호를 다시 설정 합니다
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Q.8 유해ㆍ위험작업의 취업 제한에 관한 규칙(고용노동부령)(제00305호)</Accordion.Header>
        <Accordion.Body>
        유해ㆍ위험작업의 취업 제한에 관한 규칙(고용노동부령)(제00305호)을 게시하오니 사업장 안전보건교육 운영에 참고하시기 바랍니다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;