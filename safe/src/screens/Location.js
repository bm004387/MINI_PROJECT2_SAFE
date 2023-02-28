
// import React,{useEffect} from "react";

//  const{kakao} = window;

// function Location(){

//     const markerPosition  = new kakao.maps.LatLng(37.50325249602558, 126.87888030892368); 
//     useEffect(() =>{
// const Container = document.getElementById('map');
// const Options = {
//         center: new kakao.maps.LatLng(37.50325249602558, 126.87888030892368), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };
//     const map = new kakao.maps.Map(Container, Options); // 지도를 생성합니다
//     },
    
    
    
//     [])
//     const marker = new kakao.maps.Marker({
//         position: markerPosition
//     });
    
//     return(
//         <div id="map" style={{
//             width: '500px',
//             height: '500px'
//         }}></div>
//     )
// }




// export default Location;


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

  return <div id="map" style={{ width: "50vw", height: "50vh" }}></div>;
}