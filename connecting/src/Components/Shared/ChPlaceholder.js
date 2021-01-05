import React from "react"
import { ReactComponent as Ch } from "../../Media/Icons/user.svg"
import { Link } from "react-router-dom"

const ChPlaceholder = (props) => {
  let icon = {
    display         :  "inline-block",
    width           :  props.width,
    position        :  props.position,
    top             :  props.top,
    left            :  props.left,
    borderRadius    :  "100%",
    backgroundColor :  props.selected
  }
  // let style={
  //   props.isChanged
  //     ? { backgroundColor: "#4059AD" }
  //     : { backgroundColor: "" }
  // }
  return (
    <Link to={props.link} style={icon}>
      <Ch />
    </Link>
  )
}

export default ChPlaceholder
