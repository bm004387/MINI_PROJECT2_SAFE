import React from "react";

import './intro.css';
import ReactPlayer from 'react-player'

class Movie extends React.Component{
    render(){
        return(
              <>
              <div>
                    <ReactPlayer
                      url={process.env.PUBLIC_URL + '/images/movie/movie2.mp4'}
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
