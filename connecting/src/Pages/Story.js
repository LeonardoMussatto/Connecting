import React, { useContext,useState, useEffect } from "react"
import { useLocation }  from "react-router-dom"
import { ThemeContext } from "../Helpers/Theme"

//Header
import Location from "../Components/Stories/Location"
import Weather  from "../Components/Stories/Weather"
import Time     from "../Components/Stories/Time"

//Placeholders
import Ch   from "../Components/Shared/ChPlaceholder"
import Card from "../Components/Shared/Card"


//ENHANCEMENT #18 make the page responsive - add support for mobile devices
//STYLE #12 add side bar animation - selected icon
//STYLE #12 add card exit animation
//ENHANCEMENT STYLE create a more contemporary look


const Story = (props) => {
  const theme                         = useContext(ThemeContext)
  const [character, setCharacter]     = useState(theme.story.ch3)
  const [CardContent, setCardContent] = useState(character.storyContent[0])  //REM choose a def. state
  const [timeZone, setTimeZone]       = useState(0)

  let location = useLocation()
  useEffect(() => {
    switch (location.hash) {
      case "#1":
        setCharacter(theme.story.ch1)
        setCardContent(props.story1)
        setTimeZone(-5)
        break
      case "#2":
        setCharacter(theme.story.ch2)
        setCardContent(props.story2)
        setTimeZone(+7)
        break
      case "#3":
        setCharacter(theme.story.ch3)
        setCardContent(props.story3)
        setTimeZone(-5)
        break
      case "#4":
        setCharacter(theme.story.ch4)
        setCardContent(props.story4)
        setTimeZone(+7)
        break

      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, props.minutes])

  let page = {
    ...theme.page
  }
  let nav = {
    ...theme.nav
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
      backgroundColor :  character.backgroundColor,
      color           :  character.color,
      overflow        :  "clip"
    },
    header: {
      backgroundColor     :  character.backgroundColor,
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
      borderColor         :  character.borderColor,
      ...theme.text,
    },
    cards: {
      gridArea        :  "cards",
      display         :  "grid",
      placeItems      :  "center center",
      padding         :  "3%",
      ...character.text
    },
  }
  return (
    <div style={page}>
      <nav style={nav}>
        <Ch
          width={"60%"}
          link={location.hash === "#1" ? "/App/Interface" : "/App/Story#1"}
          selected={
            location.hash === "#1"
              ? character.textBackgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#2" ? "/App/Interface" : "/App/Story#2"}
          selected={
            location.hash === "#2"
              ? character.textBackgroundColor
              : theme.page.backgroundColor
          }
        />
        {/* <Ch
          width={"60%"}
          link={location.hash === "#3" ? "/App/Interface" : "/App/Story#3"}
          selected={
            location.hash === "#3"
              ? character.backgroundColor
              : theme.page.backgroundColor
          }
        /> */}
      </nav>
      <div style={content.div}>
        <header style={content.header}>
          <Location />
          <Weather />
          <Time
            hours    = {props.hours}
            minutes  = {props.minutes}
            timeZone = {timeZone}
          />
        </header>
        <main style={content.cards}>
          <Card
            key                 = {CardContent.text.text}
            text                = {CardContent.text.text}
            textPosition        = {CardContent.text.position}
            padding             = {CardContent.text.padding}
            src                 = {CardContent.media.src}
            alt                 = {CardContent.media.alt}
            width               = {CardContent.media.width}
            height              = {CardContent.media.height}
            mediaPosition       = {CardContent.media.position}
            textBackgroundColor = {character.textBackgroundColor}
          />
        </main>
      </div>
    </div>
  )
}

export default Story
