
import React,{useEffect} from "react";

const{kakao} = window;

function Location(){

    useEffect(() =>{
const mapContainer = document.getElementById('map');
const mapOption = {
        center: new kakao.maps.LatLng(37.50325249602558, 126.87888030892368), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    },[])

    return(
        <div id="map" style={{
            width: '500px',
            height: '500px'
        }}></div>
    )
}

export default Location;
