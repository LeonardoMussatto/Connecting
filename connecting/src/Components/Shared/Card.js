import React, { useState, useEffect } from "react"
import VideoPlayer from "./VideoPlayer"

const Card = (props) => {
  const [CardStyle, setCardStyle] = useState()
  const [MediaStyle, setMediaStyle] = useState()
  
  useEffect(() => {
    if (props.mediaPosition === "center") {
      let card = {
        display    :  "grid",
        placeItems :  "center center"
      }
      setCardStyle(card)
      let media = {
        gridArea        :  "right",
        position        :  "start center",
        height          :  props.height,
        width           :  props.width,
        borderRadius    :  "18px",
        backgroundColor :  props.backgroundColor
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
        width        :  props.width,
        height       :  props.height,
        borderRadius :  "18px",
      }
      setMediaStyle(media)
    }
  }, [props.backgroundColor, props.height, props.mediaPosition, props.width])
  
  let p = {
    gridArea        :  "left",
    placeSelf       :  `${props.textPosition} center`,
    zIndex          :  "1",
    backgroundColor :  props.textBackgroundColor,
    borderRadius    :  "18px",
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
          <VideoPlayer src={props.src} />
        </div>
      )}
    </section>
  )
  
}
export default Card
