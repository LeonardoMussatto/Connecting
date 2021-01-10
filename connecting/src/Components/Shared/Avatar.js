import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ChPlaceholder = (props) => {
  const [Style, setStyle] = useState()
  useEffect(() => {
    if (props.isChanged){
      let style = {
        display         :  "inline-block",
        width           :  "60%",
        borderRadius    :  "100%",
        borderStyle     :  "solid",
        borderWidth     :  "4px",
        backgroundColor :  props.selected,
        borderColor     :  props.borderColor,
        boxShadow       : "-8px -8px 16px #362d4f, 8px 8px 16px #40355d"
      }
      setStyle(style)
    } else {
      let style = {
        display         :  "inline-block",
        width           :  "60%",
        borderRadius    :  "100%",
        borderStyle     :  "transparent",
        borderWidth     :  "4px",
        backgroundColor :  props.selected,
        borderColor     :  props.borderColor,
        boxShadow       : "-8px -8px 16px #362d4f, 8px 8px 16px #40355d"
      }
      setStyle(style)
    }
  }, [props.borderColor, props.isChanged, props.selected])

  return (
    <Link to={props.link} style={Style}>
      <img src={props.src} alt={"avatar"}/>
    </Link>
  )
}

export default ChPlaceholder
