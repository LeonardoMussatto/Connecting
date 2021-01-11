import React, { useContext, useState, useEffect } from "react"
import { ThemeContext }     from "../Helpers/Theme"

//Components
import Avatar from "../Components/Shared/Avatar"
import Card   from "../Components/Shared/Card"
import img    from "../Media/Icons/Social/Logo-04.svg"

//ENHANCE #23 make Interface page responsive - add support for mobile devices
//ENHANCE implement "Hello, Salut!" - https://fourtonfish.com/project/hellosalut-api/
//STYLE #24 add smooth transition between carousel cards and interface => story
//STYLE add smooth opening transition

const Interface = (props) => {
  const theme = useContext(ThemeContext)
  const [BorderColor_1, setBorderColor_1] = useState(theme.developer.textBackgroundColor + "00")
  const [BorderColor_2, setBorderColor_2] = useState(theme.illustrator.textBackgroundColor + "00")
  const [BorderColor_U, setBorderColor_U] = useState(theme.user.textBackgroundColor + "00")

  const content = [
    {
      id: 1,
      text: "Hi, welcome to The Hub",
      media: {
        src: "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/036ec5c19d69abba006ac410512af336c4f948d0/connecting/src/Media/Icons/Handz/InterfaceCarousel-01.svg",
        alt: "Hi"
      }
    },
    {
      id: 2,
      text: "Thank you for participating in the evaluation program",
      media: {
        src: "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/7bdce2d454f9202cf5127503523d11150e5ae179/connecting/src/Media/Icons/Handz/InterfaceCarousel-02.svg",
        alt: "hand"
      }
    },
    {
      id: 3,
      text: "You are joining the community as an observer",
      media: {
        src: "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/Content/connecting/src/Media/Images/InterfaceCarousel-03-01.png",
        alt: "man using a spyglass"
      }
    },
    {
      id: 4,
      text: "Click on the icons to watch the streams from random picked full members",
      media: {
        src: "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/036ec5c19d69abba006ac410512af336c4f948d0/connecting/src/Media/Icons/Handz/InterfaceCarousel-04.svg",
        alt: "hand pointing left"
      }
    }
  ]
  
  
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

  useEffect(() => {
    props.isChanged_Story1  ? setBorderColor_1(theme.developer.textBackgroundColor)   :  setBorderColor_1(theme.developer.textBackgroundColor + "00")
    props.isChanged_Story2  ? setBorderColor_2(theme.illustrator.textBackgroundColor) :  setBorderColor_2(theme.illustrator.textBackgroundColor + "00")
    props.isChanged_History ? setBorderColor_U(theme.user.textBackgroundColor)        :  setBorderColor_U(theme.user.textBackgroundColor + "00")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.isChanged_History, props.isChanged_Story1, props.isChanged_Story2])

  return (
    <div style={page}>
      <img src={img} alt="" style={logo}/>
      <nav style={!props.userIsVisible ? nav : nav2}>
        <Avatar
          src         = {theme.avatar.female}
          width       = {"60%"}
          link        = {"/App/Story#1"}
          borderColor = {BorderColor_1}
        />
        <Avatar
          src         = {theme.avatar.male}
          width       = {"60%"}
          link        = {"/App/Story#2"}
          borderColor = {BorderColor_2}
        />
        {props.userIsVisible &&
        <Avatar
          src         = {theme.avatar.user_male}
          width       = {"60%"}
          link        = {"/App/User"}
          borderColor = {BorderColor_U}
        />}
      </nav>
      <main style={main}>
          <Card 
            key                 = {content[props.index].id}
            text                = {content[props.index].text}
            src                 = {content[props.index].media.src}
            alt                 = {content[props.index].media.alt}
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
