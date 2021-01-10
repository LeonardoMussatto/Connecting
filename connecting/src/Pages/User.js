import React, { useContext } from "react"
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
  
  return (
    <div style={page}>
      <img src={img} alt="" style={logo}/>
      <nav style={nav}>
        <Avatar
          src={theme.avatar.female}
          link={"/App/Story#1"}
          isChanged = {props.isChanged_Story1}
          borderColor = {theme.developer.textBackgroundColor}
        />
        <Avatar
          src={theme.avatar.male}
          link={"/App/Story#2"}
          isChanged = {props.isChanged_Story2}
          borderColor = {theme.illustrator.textBackgroundColor}
        />
        <Avatar
        src={theme.avatar.user_male}
          link={"/App/Interface"}
          selected = {theme.user.textBackgroundColor}
          isChanged = {false}
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
            isLoaded     = {props.isLoaded_Weather}
            isError      = {props.weatherError}
            report       = {props.weatherReport}
            weatherIndex = {props.weatherIndex}
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
