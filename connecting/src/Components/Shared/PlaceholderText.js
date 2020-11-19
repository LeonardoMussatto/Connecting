import React from "react"

function PlaceholderText(props) {
  const style = {
    margin   :  `${props.marginTB} ${props.marginLR}`,
    position :  props.position,
    top      :  props.top,
    left     :  props.left,
  }
  const short =
    "[Placeholder] But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain"
  const long =
    "[Placeholder] But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth"
  return <p style={style}>{props.length === "short" ? short : long}</p>
}

export default PlaceholderText
