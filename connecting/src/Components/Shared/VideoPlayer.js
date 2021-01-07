import React from 'react'
import ReactPlayer from 'react-player/vimeo'


const VideoPlayer = (props) => {
    let style = {
        borderRadius :  "18px",
        borderStyle  :  "solid",
        borderWidth  :  "4px",
        borderColor  :  props.color,
        overflow     :  "hidden"
    }
    return (<ReactPlayer url={props.src}
    config={{
        vimeo: {
            playerOptions: {
                autopause :  false,
                autoplay  :  props.autoplay,
                byline    :  false,
                portrait  :  false,
                title     :  false,
                controls  :  false,
            }  
        }
    }}
    muted={true} pip={false} width={props.width} height={props.height} style={style}
    />)
}

export default VideoPlayer
