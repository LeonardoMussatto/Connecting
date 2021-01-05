import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"
import { useLocation }  from "react-router-dom"
//Header
import Location from "../Components/Stories/Location"
import Weather  from "../Components/Stories/Weather"
import Time     from "../Components/Stories/Time"
//Components
import Ch   from "../Components/Shared/ChPlaceholder"
import UserHistory from "../Components/Shared/UserHistory"

const User = (props) => {
  let theme    = useContext(ThemeContext)
  let location = useLocation()
  let page = {
    ...theme.page
  }
  let nav = {
    ...theme.nav,
    padding    :  "10% 5%",
  }
  let content = {
    div: {
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
      backgroundColor :  theme.story.user.backgroundColor,
      color           :  theme.story.user.color
    },
    header: {
      backgroundColor     :  theme.story.user.backgroundColor,
      margin              :  "2% 2% 0",
      gridArea            :  "header",
      display             :  "grid",
      placeItems          :  "center",
      gap                 :  "1%",
      gridTemplateColumns :  "1fr 1fr 1fr",
      gridAutoFlow        :  "column",
      position            :  "sticky",
      top                 :  "7%",
      borderRadius        :  "18px",
      borderStyle         :  "solid",
      borderWidth         :  "4px",
      borderColor         :  theme.story.user.borderColor,
      ...theme.text
    },
    cards: {
      gridArea         :  "cards",
      display          :  "grid",
      gridTemplateRows :  "repeat(20vh)",
      placeItems       :  "center center",
      margin           :  "3%",
      overflowY        :  "scroll",
      overflowX        :  "clip",
      scrollBehavior   :  "smooth",
      scrollbarWidth   :  "thin",
      ...theme.story.user.text
    },
  }
  
  return (
    <div style={page}>
      <nav style={nav}>
        <Ch
          width={"60%"}
          link={location.hash === "#1" ? "/App/Interface" : "/App/Story#1"}
          isChanged = {props.story1IsChanged}
        />
        <Ch
          width={"60%"}
          link={location.hash === "#2" ? "/App/Interface" : "/App/Story#2"}
          isChanged = {props.story2IsChanged}

        />
        <Ch
          width={"60%"}
          link={location.pathname === "/App/User" ? "/App/Interface" : "/App/User"}
          selected={
            location.pathname === "/App/User"
              ? theme.story.user.textBackgroundColor
              : theme.page.backgroundColor
          }
        />
      </nav>
      <div style={content.div}>
        <header style={content.header}>
          <Location />
          <Weather />
          <Time
            hours    = {props.hours}
            minutes  = {props.minutes}
            timeZone = {props.timeZone}
          />
        </header>
        <main style={content.cards}>
          <UserHistory
            history = {props.history}
            textBackgroundColor = {theme.story.user.textBackgroundColor}
          />
        </main>
      </div>
    </div>
  )
}

export default User
