import React, { useContext, useState } from "react"
import { ThemeContext } from "../Helpers/Theme"
// import { AnimatePresence } from "framer-motion"

import Card from "../Components/Shared/Card"
import Content from "../Media/Content/Interface.json"

//Placeholders
import Ch              from "../Components/Shared/ChPlaceholder"

// TODO #8 create a reusable component for characters icons - they should also contain routes and notification style/logic
//STYLE #23 make Interface page responsive - add support for mobile devices
//ENHANCEMENT #24 STYLE add subtle y-axis animation to the icons - make the page more lively

const Interface = () => {
  const theme = useContext(ThemeContext)
  const [Index, setIndex] = useState(0)
  
  if (Index < Content.length - 1){
    setTimeout(() => {
      setIndex(Index + 1)
  }, 2000);
  }

  let page = {
    ...theme,
    padding             :  "0",
    height              :  "100vh",
    gridTemplateRows    :  "minmax(min-content, 30vh) minmax(min-content, 70vh)",
    gridTemplateColumns :  "100vw",
    overflow: "auto"
  }
  let header = {
    display    :  "grid",
    placeItems :  "center",
    visibility :  "visible"  //REM when invisible, the icons have to be re-centred
  }
  let main = {
    display        :  "flex",
    justifyContent :  "space-evenly",
    alignItems     :  "center"
  }
  return (
    <div style={page}>
      <header style={header}>
          <Card 
            key={Content[Index].id}
            text={Content[Index].text}
          />
      </header>
      <main style={main}>
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/story#1"}
        />
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/story#2"}
        />
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/story#3"}
        />
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/story#4"}
        />
      </main>
    </div>
  )
}

export default Interface
