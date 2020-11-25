import React from "react"
import { ReactComponent as Ch } from "../../Media/Icons/user.svg"
import { Link } from "react-router-dom"

const ChPlaceholder = (props) => {
  let icon = {
    width    :  props.width,
    position :  props.position,
    top      :  props.top,
  }
  return (
    <Link to={props.link} style={icon}>
      <Ch />
    </Link>
  )
}

export default ChPlaceholder
