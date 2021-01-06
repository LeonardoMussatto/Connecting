import React  from "react"
import Story1 from "../Media/Stories/Story1.json"
import Story2 from "../Media/Stories/Story2.json"
// import Story3 from "../Media/Stories/Story1.2.json"
// import Story4 from "../Media/Stories/Story2.2.json"
// import Story1 from "../Media/Stories/Placeholders/storyContentPlaceholder3.json"
// import Story2 from "../Media/Stories/Placeholders/storyContentPlaceholder2.json"

export const theme = {
  common: {
    general: {
      fontFamily          :  "sans-serif",
      fontSize            :  "1em",
      fontWeight          :  "400",
      boxSizing           :  "border-box",
      padding             :  "2vw",
      display             :  "grid",
      gridTemplateColumns :  "repeat(auto-fit, minmax(15rem, 1fr))",
      scrollbarWidth      :  "thin",
    },
    button: {
      
      //REM There are two levels of contrast involved when creating initial button styles: At least 3:1 between the button background color, and the background it is displayed against; At least 4.5:1 (for text less than 18px or 16px bold) or 3:1 (for text greater than those measures) between the button text and the button background
      
      //Visual
      backgroundColor :  "transparent",
      borderRadius    :  "8px",
      cursor          :  "pointer",       // TODO choose a coherent pointer - consider if to also change the overall def pointer

      //for icon-button tricks see https://moderncss.dev/icon-button-css-styling-guide/
    },
    text:{
      fontFamily :  "Quicksand, sans-serif",
      fontWeight :  "400",
      lineHeight :  "1.5",
      fontSize   :  "100%"
    },
    header:{
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "200"
    },
  },
}

theme.landing = {
  page: {
    ...theme.common.general,
    backgroundColor :  "#4D426D",
    color           :  "#F5FFFE",
  },
  button: {
    ...theme.common.button,
    ...theme.common.header,
    fontWeight      :  "400",
    backgroundColor :  "#FBA374",
    color           :  "#3B3156",
    borderRadius    :  "8px",
  },
  title:{
    ...theme.common.header,
    fontSize: "2em"
  },
  text:{
    ...theme.common.text,
    backgroundColor: "#3B3156"
  }
}

theme.app = {
  page: {
    ...theme.common.general,
    backgroundColor     :  "#3B3156",
    borderColor         :  "#F5FFFE",                   //each story will probably have a different border color, maybe a gradient - page background is not bad though
    color               :  "#3E4250",
    padding             :  "0",
    display             :  "grid",
    gridTemplateColumns :  "minmax(80px, 20vw) auto",
    gridTemplateRows    :  "10vh 90vh",
    gridTemplateAreas   :  `
      "logo logo"
      "nav story"
    `
  },
  nav: {
    padding    :  "30% 5%",
    gridArea   :  "nav",
    display    :  "grid",
    placeItems :  "center center"
  },
  text: {
    ...theme.common.text,
    lineHeight: "2em",
    color :  "#F5FFFE",
    textBackgroundColor :  "#4D426D" // #4059AD
  },
  avatar: {
    female :  "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/ad8621cf7df6033e0883d672283f276c883fefa0/connecting/src/Media/Icons/Avatars/Avatar-01.svg",
    male   :  "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/36ad8207e99fb865e2395661e0984ed0cc343d80/connecting/src/Media/Icons/Avatars/Avatar-02.svg"
  }
}

theme.app.story = {
  ch1: {
    text: {...theme.common.text},
    backgroundColor     :  "#4D426D",
    color               :  "#1C1B3A",
    textBackgroundColor :  "#01D2CD",
    storyContent        :  Story1
  },
  ch2: {
    text: {...theme.common.text},
    backgroundColor     :  "#4D426D",
    color               :  "#1C1B3A",
    textBackgroundColor :  "#F98063",
    storyContent        :  Story2
  },
  // ch3: {
  //   backgroundColor     :  "#9AAAD9",
  //   borderColor         :  "#F5FFFE",
  //   color               :  "#1C1B3A",
  //   textBackgroundColor :  "",
  //   storyContent        :  Story3
  // },
  // ch4: {
  //   backgroundColor     :  "#FFCB77",
  //   borderColor         :  "#F5FFFE",
  //   color               :  "#1C1B3A",
  //   textBackgroundColor :  "",
  //   storyContent        :  Story4
  // },
  user: {
    text: {...theme.common.text},
    backgroundColor     :  "#4D426D",
    color               :  "#F5FFFE",
    textBackgroundColor :  "#2173f6",
  }
}


export const ThemeContext = React.createContext(theme.common)
