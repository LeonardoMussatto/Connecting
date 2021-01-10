import React  from "react"
import Story1_AR from "../Media/Stories/Story1_AR.json"
import Story1_TH from "../Media/Stories/Story1_TH.json"
import Story2_AR from "../Media/Stories/Story2_AR.json"
import Story2_TH from "../Media/Stories/Story2_TH.json"
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
    borderColor         :  "#F5FFFE",
    color               :  "#3E4250",
    padding             :  "0",
    display             :  "grid",
    gridTemplateColumns :  "minmax(80px, 20vw) auto",
    gridTemplateRows    :  "10vh 90vh",
    gridTemplateAreas   :  `
      "logo logo"
      "nav story"
    `,
  },
  nav: {
    padding    :  "30% 5%",
    gridArea   :  "nav",
    display    :  "grid",
    placeItems :  "center center",
  },
  content: {
    gridArea            :  "story",
    display             :  "grid",
    gridTemplateRows    :  "6rem calc(100% - 6rem)",
    gridTemplateColumns :  "1fr",
    gridTemplateAreas   :  `
      "header"
      "cards"
      `,
    margin          :  "3% 3% 3% 0",
    borderRadius    :  "18px",
    borderStyle     :  "solid",
    borderWidth     :  "4px",
    borderColor     :  "#1C1B3A",
    backgroundColor :  "#4D426D",
    // boxShadow: "inset 5px 5px 10px #2c2440, inset -5px -5px 10px #4a3e6c"
  },
  logo: {
    gridArea: "logo",
    placeSelf: "center center",
    width        :  "5%",
    borderRadius :  "100%",
    padding: "0.2%",
    marginTop: "2%",
    background: "linear-gradient(315deg, #524775, #453b62)",
    boxSizing: "border-box"},
  header: {
    margin              :  "2% 2% 0",
    gridArea            :  "header",
    display             :  "grid",
    gridTemplateColumns :  "1fr 1fr 1fr",
    gridAutoFlow        :  "column",
    placeItems          :  "center center",
    gap                 :  "1%",
    position            :  "sticky",
    top                 :  "7%",
    borderRadius        :  "18px",
    borderStyle         :  "solid",
    borderWidth         :  "4px",
    lineHeight          :  "2em",
    borderColor         :  "#1C1B3A",
    color               :  "#F5FFFE",
    // backgroundColor     :  "#9992b3",       // #4059AD
    boxShadow: "7px 7px 14px #473d64, -7px -7px 14px #534776",
    ...theme.common.text,
  },
  cards: {
    gridArea   :  "cards",
    display    :  "grid",
    placeItems :  "center center",
    margin     :  "3%",
    // color      :  "#1C1B3A",
    ...theme.common.text,
  },
  text: { ...theme.common.text, color: "#F5FFFE" },
  avatar: {
    female:
      "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/ad8621cf7df6033e0883d672283f276c883fefa0/connecting/src/Media/Icons/Avatars/Avatar-01.svg",
    male:
      "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/36ad8207e99fb865e2395661e0984ed0cc343d80/connecting/src/Media/Icons/Avatars/Avatar-02.svg",
    user_male:
      "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/60ad44686ea01aa236db6bbb1fdb5bbc78d34f6f/connecting/src/Media/Icons/Avatars/Avatar-03.svg",
    user_female:
      "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/60ad44686ea01aa236db6bbb1fdb5bbc78d34f6f/connecting/src/Media/Icons/Avatars/Avatar-04.svg",
  },
  locations: {
    TH: {
      name     :  "Thailand",
      lat      :  "13.742395",
      lon      :  "100.549215",
      timeZone :  +7
    },
    AR: {
      name     :  "Argentina",
      lat      :  "",
      lon      :  "",
      timeZone :  -3
    }
  },
  developer: {
    textBackgroundColor: "#01D2CD",
    weather: { main: "mist", icon: "50d" },
    TH: Story1_TH,
    AR: Story1_AR
  },
  illustrator: {
    textBackgroundColor: "#F98063",
    weather: { main: "few clouds ", icon: "02d" },
    TH: Story2_TH,
    AR: Story2_AR
  },
  user: {
    textBackgroundColor :  "#9AAAD9",
    weather :  { main: "drizzle ", icon: "09d" },
  }
}

export const ThemeContext = React.createContext(theme.common)
