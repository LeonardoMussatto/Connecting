import React from "react"
import { ReactComponent as Ch } from "../../Media/Icons/user.svg"

const ChPlaceholder = (props) => {
  let icon = {
    width    :  props.width,
    position :  props.position,
    top      :  props.top,
  }
  return (
    <div style={icon}>
      <Ch />
    </div>
  )
}

export default ChPlaceholder
