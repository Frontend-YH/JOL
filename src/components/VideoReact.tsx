import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import './VideoReact.css';

function VideoReact(props) {

  return (
    <div className="flexItem">
    <Player fluid={true} muted={true} loop autoPlay>
      <source src={props.video}/>
    </Player>
    </div>
  );
}

export default VideoReact;