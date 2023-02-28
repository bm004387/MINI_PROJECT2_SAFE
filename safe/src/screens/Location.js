import '../css/location.css';
import Bus from '../locationIcon/bus.svg'
import Subway from '../locationIcon/subway.svg'
import Nav from '../locationIcon/navigation.svg'
import Park from '../locationIcon/parking.svg'



/*global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.50325249602558, 126.87888030892368),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        37.50325249602558, 126.87888030892368
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
    <div className='location'>
      <h1>찾아오시는 길</h1>
    <div id="map"/>
      <div className="information">
        <h2>INFORMATION</h2>
        <h2><small>SAFE 정보</small></h2><br></br>
            <h3>Address</h3>
            <h3><small>서울시 구로구 경인로 557 (구로동 606-4)</small></h3>
            <h3>Tel</h3>
            <h3><small>02-0000-0000</small></h3>
            <h3>Fax</h3>
            <h3><small>02-0000-0001</small></h3>
      </div>
      <div className='traffic'>
        <div className='traffics'>
          <div className='transportation'>
            <img src={Bus}/>
            <h2>버스</h2>
          </div>
          <h2><small>구로역1호선<br></br>③번출구 도보 3분거리</small></h2>
        </div>
        <div className='traffics'>
          <div className='transportation'>
            <img src={Subway}/>
            <h2>지하철</h2>
          </div>
          <h2><small>구로역,구로기계공구상가(17147)정류장 하차 <br></br> 간선(파란)버스 : 571, 654</small></h2>
        </div>
        <div className='traffics'>
          <div className='transportation'>
            <img src={Nav}/>
            <h2>네비게이션</h2>
          </div>
          <h2><small>구로역 "SAFE 교육센터" 검색</small></h2>
        </div>
        <div className='traffics'>
          <div className='transportation'>
          <img src={Park}/>
          <h2>주차안내</h2>
          </div>
          <h2><small>상가 지상 1층 주차장 이용</small></h2>
        </div>
      </div>
    </div>


  );
}