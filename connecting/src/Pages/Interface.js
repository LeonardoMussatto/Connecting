import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"

//Placeholders
import PlaceholderText from "../Components/Shared/PlaceholderText"
import Ch              from "../Components/Shared/ChPlaceholder"

// TODO #8 create a reusable component for characters icons - they should also contain routes and notification style/logic
//STYLE #23 make Interface page responsive - add support for mobile devices
//ENHANCEMENT #24 STYLE add subtle y-axis animation to the icons - make the page more lively

const Interface = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme,
    padding             :  "0",
    height              :  "100vh",
    gridTemplateRows    :  "minmax(min-content, 40vh) minmax(min-content, 90vh)",
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
        <PlaceholderText marginTB={"2%"} marginLR={"30%"} length={"long"} />
      </header>
      <main style={main}>
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/App/Story#1"}
        />
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/App/Story#2"}
        />
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/App/Story#3"}
        />
        <Ch
          position = {"relative"}
          top      = {"-10vh"}
          width    = {"25vh"}
          link     = {"/App/Story#4"}
        />
      </main>
    </div>
  )
}

export default Interface
