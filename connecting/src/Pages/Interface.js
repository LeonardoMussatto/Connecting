import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"
import Card from "../Components/Shared/Card"

//Placeholders
import Ch from "../Components/Shared/ChPlaceholder"


// TODO #8 create a reusable component for characters icons - they should also contain routes and notification style/logic
//STYLE #23 make Interface page responsive - add support for mobile devices
//ENHANCEMENT #24 STYLE add subtle y-axis animation to the icons - make the page more lively


const Interface = (props) => {
  const theme = useContext(ThemeContext)
  let Content = props.content
  let page = {
    ...theme.page
  }
  let nav = {
    ...theme.nav
  }
  let main = {
    ...theme.text,
    gridArea     :  "story",
    display      :  "grid",
    placeItems   :  "center center",
    borderRadius :  "18px"
  }
  return (
    <div style={page}>
      <nav style={nav}>
        <Ch
          width = {"60%"}
          link  = {"/App/Story#1"}
        />
        <Ch
          width = {"60%"}
          link  = {"/App/Story#2"}
        />
        {/* <Ch
          width = {"60%"}
          link  = {"/App/Story#3"}
        /> */}
      </nav>
      <main style={main}>
          <Card 
            key                 = {Content.id}
            text                = {Content.text.text}
            textPosition        = {Content.text.position}
            src                 = {Content.media.src}
            alt                 = {Content.media.alt}
            textBackgroundColor = {theme.text.textBackgroundColor}
            mediaPosition       = {"center"}
            padding             = {"2%"}
          />
      </main>
    </div>
  )
}

export default Interface
