import React from "react"

const Link = (props) => {
  let linkStyle = {
    fontFamily     :  "Quicksand, sans-serif",
    fontWeight     :  "200",
    fontSize       :  "100%",
    lineHeight     :  "1.1",
    textAlign      :  "center",
    textDecoration :  "none",
    display        :  "inline-flex",
    color          :  "#F5FFFE",
  }
  let buttonStyle = {
    fontFamily      :  "Quicksand, sans-serif",
    fontWeight      :  "200",
    fontSize        :  "100%",
    lineHeight      :  "1.1",
    textAlign       :  "center",
    textDecoration  :  "none",
    display         :  "inline-flex",
    alignItems      :  "center",
    justifyContent  :  "center",
    backgroundColor :  props.backgroundColor,
    color           :  "#F5FFFE",
    borderRadius    :  props.borderRadius,
    padding         :  "0.25em 0.75em",
    minWidth        :  "10ch",
    minHeight       :  "44px",
  }
  let img = {
    width       :  "50px",
    marginRight :  "1em",
  }
  return (
    <a style={props.isButton ? buttonStyle : linkStyle} href={props.href}>
        {props.isButton && <img style={img} src={props.src} alt="button" />}
      {props.children}
    </a>
  )
}

export default Link
