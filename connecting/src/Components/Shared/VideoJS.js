import React, { useRef, useEffect } from "react"
import videojs from "video.js"

const VideoJS = (props) => {
  const videoPlayerRef = useRef()

  useEffect(() => {
    const videoJSOptions = {
      autoplay: "play",
    }
    const player = videojs(videoPlayerRef.current, videoJSOptions, () => {
      player.play(props.src)
    })
    return () => {
      player.dispose()
    }
  }, [props.src])
  return <video ref={videoPlayerRef} />
}

export default VideoJS
