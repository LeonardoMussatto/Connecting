import React from "react"

const Card = (props) => {
  let card = {
    display    :  "grid",
    placeItems :  "center",
  }
  let p = {
    position        :  props.textPosition,
    bottom          :  props.textBottom,
    left            :  props.textLeft,
    zIndex          :  "1",
    backgroundColor :  props.textBackgroundColor,
    borderRadius    :  "18px",
    padding         :  "0.5%",
  }
  let m = {
    position :  props.mediaPosition,
    bottom   :  props.mediaBottom,
    left     :  props.mediaLeft,
    width    :  props.width,
    height   :  props.height,
  }
  return (
    <section style={card}>
      <p   style = {p}>{props.text}</p>
      <img style = {m} src = {props.src} alt = {props.alt} />
    </section>
  )
}
export default Card
