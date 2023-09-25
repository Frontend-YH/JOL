// ts
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function YTPlayer(props) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '200',
    width: '328',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      showinfo: 0,
      controls: 0,
      rel: 0, // Disable related videos
      fs: 0, // Disable fullscreen button
      iv_load_policy: 3, // Disable video annotations
    },
  };

  return <YouTube videoId={props.video} opts={opts} onReady={onPlayerReady}/>;
}

export default YTPlayer;

/*

<div style={flexContainer}>
{infoText[0].video.map((videoID, index) => (
        <YTPlayer key={index} video={videoID} style={flexItem}/>
      ))}
</div>

*/