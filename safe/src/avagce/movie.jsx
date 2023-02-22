
import React from "react";

import './intro.css';
import ReactPlayer from 'react-player'

class Movie extends React.Component{
    render(){
        return(
              <>
              <div className="player">
                    <ReactPlayer
    url={process.env.PUBLIC_URL + '/images/movie/quake.mp4'}
    width='50%'
    height='25%'
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

