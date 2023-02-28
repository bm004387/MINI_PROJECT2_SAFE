import React from "react";
import Button from 'react-bootstrap/Button';

import './intro.css';
import ReactPlayer from 'react-player'

class Movie extends React.Component{
    render(){
        return(
              <>
              <div className="mvName">
              <h1>소방교육 및 훈련방법
              <Button variant="success" href="/Movie">뒤로가기</Button>
              </h1>
              </div>
              <div className="player">
                    <ReactPlayer
                      url={process.env.PUBLIC_URL + '/images/movie/fire4.mp4'}
                      width='100%'
                      height='100%'
                      playing={true}
                      muted={true}
                      controls={true}
                      loop={true}
                      />
         
              </div>
              </>
              );
            }
          }

  export default Movie;
