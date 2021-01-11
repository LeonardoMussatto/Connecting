import React, { useContext, useState, useEffect } from "react"
import { ThemeContext }      from "../Helpers/Theme"

//Header
import Location from "../Components/Stories/Location"
import Weather  from "../Components/Stories/Weather"
import Time     from "../Components/Stories/Time"

//Components
import Avatar      from "../Components/Shared/Avatar"
import UserHistory from "../Components/Shared/UserHistory"
import img         from "../Media/Icons/Social/Logo-04.svg"


const User = (props) => {
  const theme  = useContext(ThemeContext)
  const [BorderColor_1, setBorderColor_1] = useState(theme.developer.textBackgroundColor + "00")
  const [BorderColor_2, setBorderColor_2] = useState(theme.illustrator.textBackgroundColor + "00")
  
  let page = {
    ...theme.page
  }
  let logo = {
    ...theme.logo
  }
  let nav = {
    ...theme.nav,
    padding:  "10% 5%"
  }
  let content = {
    div: {
      ...theme.content
    },
    header: {
      ...theme.header
    },
    cards: {
      ...theme.cards,
      gridTemplateRows :  "repeat(20vh)",
      overflowY        :  "scroll",
      overflowX        :  "clip",
      scrollBehavior   :  "smooth",
      scrollbarWidth   :  "thin"
    }
  }

  useEffect(() => {
    props.isChanged_Story1  ? setBorderColor_1(theme.developer.textBackgroundColor)   :  setBorderColor_1(theme.developer.textBackgroundColor + "00")
    props.isChanged_Story2  ? setBorderColor_2(theme.illustrator.textBackgroundColor) :  setBorderColor_2(theme.illustrator.textBackgroundColor + "00")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.isChanged_History, props.isChanged_Story1, props.isChanged_Story2])
  
  return (
    <div style={page}>
      <img src={img} alt="" style={logo}/>
      <nav style={nav}>
        <Avatar
          src  = {theme.avatar.female}
          link = {"/App/Story#1"}
          borderColor = {BorderColor_1}
        />
        <Avatar
          src  = {theme.avatar.male}
          link = {"/App/Story#2"}
          borderColor = {BorderColor_2}
        />
        <Avatar
          src  = {theme.avatar.user_male}
          link = {"/App/Interface"}
          selected  = {theme.user.textBackgroundColor}
          borderColor = {"#00000000"}
        />
      </nav>
      <div style={content.div}>
        <header style={content.header}>
          <Location 
            isLoaded = {props.isLoaded_Geo}
            location = {props.country}
          />
          <Weather 
            isLoaded = {props.isLoaded_Weather}
            isError  = {props.weatherError}
            report   = {props.weatherReport}
            index    = {props.weatherIndex}
          />
          <Time
            hours    = {props.hours}
            minutes  = {props.minutes}
            timeZone = {0}
          />
        </header>
        <main style={content.cards}>
          <UserHistory
            history = {props.history}
            textBackgroundColor = {theme.user.textBackgroundColor}
          />
        </main>
      </div>
    </div>
  )
}

export default User
