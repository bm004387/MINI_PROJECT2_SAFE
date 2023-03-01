import React from "react";
import Button from 'react-bootstrap/Button';

import './intro.css';
import ReactPlayer from 'react-player'

class Movie extends React.Component{
    render(){
        return(
              <>
              <div className="mvName">
              <h1>지진 국민행동요령
              <Button variant="success" href="/Movie">뒤로가기</Button>
              </h1>
              </div>
              <div className="player">
                    <ReactPlayer
                      url={process.env.PUBLIC_URL + '/images/movie/earthquake3.mp4'}
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