import React     from "react"
import { Link } from "react-router-dom"

const ChPlaceholder = (props) => {
  let style = {
    display         :  "inline-block",
    width           :  "60%",
    borderRadius    :  "100%",
    borderWidth     :  "4px",
    borderStyle     :  "solid",
    backgroundColor :  props.selected,
    borderColor     :  props.borderColor,
    boxShadow       :  "-8px -8px 16px #362d4f, 8px 8px 16px #40355d"
  }

  return (
    <Link to={props.link} style={style}>
      <img src={props.src} alt={"avatar"}/>
    </Link>
  )
}

export default ChPlaceholder
