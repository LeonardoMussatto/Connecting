import React from "react"


//STYLE #14 replicate wireframe styling - it won't be definitive, but al least we'll be working on a fac-simile
//REM it might be useful to use the common as a "fail-safe theme"


export const theme = {
  common: {
    general: {
      fontFamily :  "Victor Mono",
      fontSize   :  "1em",
      fontWeight :  "200",
      boxSizing  :  "border-box",
      padding    :  "2vw",
    },
    button: {
      
      //REM There are two levels of contrast involved when creating initial button styles: At least 3:1 between the button background color, and the background it is displayed against; At least 4.5:1 (for text less than 18px or 16px bold) or 3:1 (for text greater than those measures) between the button text and the button background
      
      //Visual
      backgroundColor :  "transparent",
      borderRadius    :  "8px",
      cursor          :  "pointer",       // TODO choose a coherent pointer - consider if to also change the overall def pointer

      //for icon-button tricks see https://moderncss.dev/icon-button-css-styling-guide/
    },
  },
}

theme.landing = {
  ...theme.common.general,
  backgroundColor :  "#2a2c2d",
  color           :  "#E6E6E6",
  height          :  "100vh",
  width           :  "100vw",
  button          :  {
    ...theme.common.button,
    backgroundColor :  "#3E4250",
    color           :  "#FF75B5",
    width           :  "5vw",
    height          :  "5vw",
    borderRadius    :  "8px",
    minWidth        :  "44px",
  },
}

theme.interface = {
  ...theme.common.general,
  backgroundColor :  "#8466f2",
  color           :  "#f2f2f2",
}


export const ThemeContext = React.createContext(theme.common)