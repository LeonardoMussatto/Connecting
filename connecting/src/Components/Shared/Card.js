import React, { useState, useEffect } from "react"
import VideoPlayer                    from "./VideoPlayer"

const Card = (props) => {
  const [CardStyle, setCardStyle]   = useState()
  const [MediaStyle, setMediaStyle] = useState()
  
  useEffect(() => {
    if (props.mediaPosition === "center") {
      let card = {
        display    :  "grid",
        placeItems :  "center center",
      }
      setCardStyle(card)
      let media = {
        gridArea        :  "right",
        position        :  "start center",
        borderRadius    :  "18px",
        height          :  props.height,
        width           :  props.width,
        backgroundColor :  props.backgroundColor,
      }
      setMediaStyle(media)
    } else {
      let card = {
        display             :  "grid",
        gridTemplateRows    :  "100%",
        gridTemplateColumns :  "minmax(min-content, 30vw) minmax(7vw, 40vw)",
        gridTemplateAreas   :  `"left right"`,
        placeItems          :  "center center",
      }
      setCardStyle(card)
      let media = {
        gridArea     :  "right",
        position     :  "center center",
        borderRadius :  "18px",
        width        :  props.width,
        height       :  props.height,
      }
      setMediaStyle(media)
    }
  }, [props.backgroundColor, props.height, props.mediaPosition, props.width])
  
  let p = {
    gridArea        :  "left",
    zIndex          :  "1",
    borderRadius    :  "18px",
    placeSelf       :  `${props.textPosition} center`,
    backgroundColor :  props.textBackgroundColor,
    padding         :  props.padding,
    width           :  props.textWidth
  }
  
  return (
    <section style={CardStyle}>
      <p style={p}>{props.text}</p>
      {props.isImg === "true" ? (
        <img style={MediaStyle} src={props.src} alt={props.alt} />
      ) : (
        <div style={MediaStyle}>
          <VideoPlayer
            color    = {props.textBackgroundColor}
            src      = {props.src}
            autoplay = {true}
            width    = {"854px"}
            height   = {"480px"}
          />
        </div>
      )}
    </section>
  )
  
}
export default Card
