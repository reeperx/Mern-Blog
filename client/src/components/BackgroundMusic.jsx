"use client";
import { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const BackgroundMusic = () => {
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(5); // Set volume to %
  };

  const onStateChange = (event) => {
    if (event.data === 0) {
      // Video ended, play it again
      playerRef.current.playVideo();
    }
  };

  useEffect(() => {
    const playVideo = () => {
      if (playerRef.current) {
        playerRef.current.playVideo();
      }
    };
    
    // Delay playback to handle autoplay policies
    const timeout = setTimeout(playVideo, 1000);

    return () => {
      clearTimeout(timeout);
      if (playerRef.current) {
        playerRef.current.stopVideo();
      }
    };
  }, []);

  return (
    <div style={{ display: 'none' }}>
      <YouTube
        videoId="OP-00EwLdiU" // Replace with your YouTube video ID
        opts={{ playerVars: { autoplay: 1, loop: 1, controls: 0 } }}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default BackgroundMusic;
