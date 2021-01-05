import React, { useContext} from "react"
import { ThemeContext } from "../Helpers/Theme"
import Card from "../Components/Shared/Card"

//Placeholders
import Avatar from "../Components/Shared/Avatar"


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
    ...theme.nav,
  }
  let nav2 = {
    ...theme.nav,
    padding: "10% 5%"
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
      <nav style={props.userIsVisible ? nav2 : nav}>
        <Avatar
          src={theme.avatar.female}
          width = {"60%"}
          link  = {"/App/Story#1"}
          borderColor = {theme.story.ch1.textBackgroundColor}
          isChanged = {props.story1IsChanged}
        />
        <Avatar
          src={theme.avatar.male}
          width = {"60%"}
          link  = {"/App/Story#2"}
          borderColor = {theme.story.ch2.textBackgroundColor}
          isChanged = {props.story2IsChanged}
        />
        {props.userIsVisible &&
        <Avatar
          src={theme.avatar.male}
          width = {"60%"}
          link  = {"/App/User"}
          borderColor = {theme.story.user.textBackgroundColor}
          isChanged = {props.historyIsChanged}
        />}
      </nav>
      <main style={main}>
          <Card 
            key                 = {Content.id}
            text                = {Content.text.text}
            src                 = {Content.media.src}
            alt                 = {Content.media.alt}
            textBackgroundColor = {theme.text.textBackgroundColor}
            isImg               = {"true"}
            textPosition        = {"start"}
            height              = {"50vh"}
            width               = {"40vw"}
            backgroundColor     = {"#F5FFFE"}
            mediaPosition       = {"center"}
            padding             = {"2%"}
          />
      </main>
    </div>
  )
}

export default Interface
