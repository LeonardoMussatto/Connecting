import React from "react"

function PlaceholderText(props) {
    const style = {
        margin: "5% auto"
    }
  const short =
    "[Placeholder] But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain"
  const long =
    "[Placeholder] But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth"
  return (
    <div style={style}>
      <p>{props.length === "short" ? short : long}</p>
    </div>
  )
}

export default PlaceholderText
