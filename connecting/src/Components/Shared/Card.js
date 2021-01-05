import React, { useState, useEffect } from "react"
// import img from "../../Media/Images/logo512.png"

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
        gridArea     :  "right",
        position     :  `${props.mediaPosition} center`,
        height       :  "55vh",
        width        :  "80%",
        borderRadius :  "18px",
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
        position     :  `${props.mediaPosition} center`,
        width        :  "100%",
        height       :  props.height,
        borderRadius :  "18px",
      }
      setMediaStyle(media)
    }
  }, [props.height, props.mediaPosition])
  
  let p = {
    gridArea        :  "left",
    placeSelf       :  `${props.textPosition} center`,
    zIndex          :  "1",
    backgroundColor :  props.textBackgroundColor,
    borderRadius    :  "18px",
    padding         :  "5%",
    width           :  "70%"
  }
  
  return (
    <section style={CardStyle}>
      <p style={p}>{props.text}</p>
       <img style={MediaStyle} src={props.src} alt={props.alt} />
    </section>
  )
  
}
export default Card
