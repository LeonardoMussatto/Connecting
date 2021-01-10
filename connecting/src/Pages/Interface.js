import React, { useContext } from "react"
import { ThemeContext }     from "../Helpers/Theme"

//Components
import Avatar from "../Components/Shared/Avatar"
import Card   from "../Components/Shared/Card"
import img    from "../Media/Icons/Social/Logo-04.svg"

//STYLE #23 make Interface page responsive - add support for mobile devices
//ENHANCE STYLE implement "Hello, Salut!" - https://fourtonfish.com/project/hellosalut-api/
//ENHANCE #24 STYLE add smooth transition between carousel cards and interface => story
//ENHANCE STYLE add smooth opening transition

const Interface = (props) => {
  const theme = useContext(ThemeContext)
  let Content = props.content
  let page = {
    ...theme.page
  }
  let logo = {
    ...theme.logo
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
      <img src={img} alt="" style={logo}/>
      <nav style={!props.userIsVisible ? nav : nav2}>
        <Avatar
          src         = {theme.avatar.female}
          width       = {"60%"}
          link        = {"/App/Story#1"}
          borderColor = {theme.developer.textBackgroundColor}
          isChanged   = {props.isChanged_Story1}
        />
        <Avatar
          src         = {theme.avatar.male}
          width       = {"60%"}
          link        = {"/App/Story#2"}
          borderColor = {theme.illustrator.textBackgroundColor}
          isChanged   = {props.isChanged_Story2}
        />
        {props.userIsVisible &&
        <Avatar
          src         = {theme.avatar.user_male}
          width       = {"60%"}
          link        = {"/App/User"}
          borderColor = {theme.user.textBackgroundColor}
          isChanged   = {props.isChanged_History}
        />}
      </nav>
      <main style={main}>
          <Card 
            key                 = {Content.id}
            text                = {Content.text.text}
            src                 = {Content.media.src}
            alt                 = {Content.media.alt}
            textBackgroundColor = {theme.content.backgroundColor}
            isImg               = {"true"}
            textPosition        = {"start"}
            height              = {"50vh"}
            width               = {"40vw"}
            backgroundColor     = {"#F5FFFE"}
            mediaPosition       = {"center"}
            padding             = {"3%"}
          />
      </main>
    </div>
  )
}

export default Interface
