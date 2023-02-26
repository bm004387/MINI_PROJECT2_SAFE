import React from "react";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";
import DaumPostcode from "react-daum-postcode"; //다음 우편번호 검색 컴포넌트

const Address = (props) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
    
        console.log(fullAddress);  // 예시 : '서울 마포구 월드컵경기장 21 (성산동)'
        let parentWindow = window.opener;
        let resData = parentWindow.document.getElementById("fullAddress");
        resData.value = fullAddress;
        window.close();
        resData.focus();
    }
    return(
        <DaumPostcode
          onComplete={handleComplete}
          { ...props }
          autoClose
        />
    )
}

export default Address;