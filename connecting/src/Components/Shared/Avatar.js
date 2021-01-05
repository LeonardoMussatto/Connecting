import React from "react"
import { Link } from "react-router-dom"

const ChPlaceholder = (props) => {
  let icon = {
    display         :  "inline-block",
    width           :  props.width,
    position        :  props.position,
    top             :  props.top,
    left            :  props.left,
    borderRadius    :  "100%",
    backgroundColor :  props.selected,
    borderStyle     :  props.isChanged,
    borderWidth     :  "4px",
    borderColor     :  props.borderColor
  }

  return (
    <Link to={props.link} style={icon}>
      <img src={props.src} alt={"avatar"} />
    </Link>
  )
}

export default ChPlaceholder
