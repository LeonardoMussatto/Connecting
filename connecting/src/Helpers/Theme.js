import React from "react"


//STYLE #14 replicate wireframe styling - it won't be definitive, but al least we'll be working on a fac-simile
//REM it might be useful to use the common as a "fail-safe theme"


export const theme = {
  common: {
    general: {
      fontFamily          :  "Victor Mono",
      fontSize            :  "1em",
      fontWeight          :  "400",
      boxSizing           :  "border-box",
      padding             :  "2vw",
      display             :  "grid",
      gridTemplateColumns :  "repeat(auto-fit, minmax(15rem, 1fr))"
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
  page: {
    ...theme.common.general,
    backgroundColor :  "#5234BF",
    color           :  "#F2F2F2"
  },
  button: {
    ...theme.common.button,
    backgroundColor :  "#9AAAD9",
    color           :  "#5234BF",
    borderRadius    :  "8px",
  },
}

theme.interface = {
  ...theme.common.general,
  backgroundColor :  "#FCFCFC",
  color           :  "#4059AD",
}

theme.story = {
  page:{
    ...theme.common.general,
    backgroundColor :  "#f2f2f2",
    color           :  "#3E4250"
  },
  ch1: {
    backgroundColor :  "#A0D9CE",
    color           :  "#3E4250"
  },
  ch2: {
    backgroundColor :  "#F2D0E3",
    color           :  "#3E4250"
  },
  ch3: {
    backgroundColor :  "#9AAAD9",
    color           :  "#3E4250"
  },
  ch4: {
    backgroundColor :  "#FFCB77",
    color           :  "#3E4250"
  }
}


export const ThemeContext = React.createContext(theme.common)
