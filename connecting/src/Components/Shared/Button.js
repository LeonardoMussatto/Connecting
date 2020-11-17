import React, { useContext } from "react"
import { ThemeContext } from "../../Helpers/Theme"

const Button = (props) => {
  const theme = useContext(ThemeContext)
  let style = {
    //Display
    display        :  "inline-flex",
    alignItems     :  "center",
    justifyContent :  "center",

    //Visual
    backgroundColor :  theme.button.backgroundColor,
    color           :  theme.button.color,
    borderRadius    :  theme.button.borderRadius,
    border          :  "1px solid",

    //Size
    padding   :  "0.25em 0.75em",
    minWidth  :  "10ch",
    minHeight :  "44px",            
    //The min-height is based on ensuring the button is a large enough target on touch devices to meet the WCAG 2.1 success criteria for 2.5.5 - Target Size.

    //ROUND BUTTON DRAFT
    // width: "5vw",
    // height: "5vw",
    // borderRadius: "50%",

    //Text
    fontFamily :  "inherit",
    lineHeight :  "1.1",
    textAlign  :  "center",

    // TODO #9 add support for :hover, :focus, :active and relative transitions
    //ENHANCEMENT add solution for Windows High Contrast mode enabled - https://moderncss.dev/css-button-styling-guide/#reset-styles
    //REM read article on accessibility https://www.sarasoueidan.com/blog/accessible-icon-buttons/

  }
  return <button style={style}>{props.text}</button>
}

export default Button
