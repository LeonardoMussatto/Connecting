import React, { useContext,useState, useEffect } from "react"
import { useLocation }  from "react-router-dom"
import { ThemeContext } from "../Helpers/Theme"

//Header
import Location from "../Components/Stories/Location"
import Weather  from "../Components/Stories/Weather"
import Time     from "../Components/Stories/Time"

//Components
import Avatar from "../Components/Shared/Avatar"
import Card   from "../Components/Shared/Card"
import img    from "../Media/Icons/Social/Logo-04.svg"

//ENHANCEMENT #18 make the page responsive - add support for mobile devices
//STYLE #12 add card exit animation
//FIX add missing element to stories' JSONs

const Story = (props) => {
  let   location                          = useLocation()
  const theme                             = useContext(ThemeContext)
  const [character, setCharacter]         = useState(theme.developer)
  const [CardContent, setCardContent]     = useState(props.story1)
  const [TimeZone, setTimeZone]           = useState(0)
  const [Country, setCountry]             = useState("Everywhere and nowhere")
  const [WeatherReport, setWeatherReport] = useState(character.weather)
  const [IsLoaded, setIsLoaded]           = useState(false)
  const [IsError, setIsError]             = useState(true)

  useEffect(() => {
    switch (location.hash) {
      case "#1":
        setCharacter(theme.developer)
        setCardContent(props.story1)
        setCountry(props.country1.name)
        setTimeZone(props.country1.timeZone)
        setIsLoaded(props.isLoaded_1)
        setIsError(props.isError_1)
        setWeatherReport(props.weather_1)
        break
      case "#2":
        setCharacter(theme.illustrator)
        setCardContent(props.story2)
        setCountry(props.country2.name)
        setTimeZone(props.country2.timeZone)
        setIsLoaded(props.isLoaded_2)
        setIsError(props.isError_2)
        setWeatherReport(props.weather_2)
        break
      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, props.minutes])

  let page = {
    ...theme.page
  }
  let logo = {
    ...theme.logo
  }
  let nav = {
    ...theme.nav
  }
  let nav2 = {
    ...theme.nav,
    padding: "10% 5%"
  }
  let content = {
    div: {
      ...theme.content,
      overflow        :  "clip"
    },
    header: {
      ...theme.header
    },
    cards: {
      ...theme.cards
    }
  }

  return (
    <div style={page}>
      <img src={img} alt="" style={logo}/>
      <nav style={props.userIsVisible ? nav2 : nav}>
        <Avatar
          src      = {theme.avatar.female}
          link     = {location.hash === "#1" ? "/App/Interface" : "/App/Story#1"}
          selected = {
            location.hash === "#1"
              ? character.textBackgroundColor
              : theme.page.backgroundColor
          }
          borderColor = {theme.developer.textBackgroundColor}
          isChanged   = {props.isChanged_Story1}
        />
        <Avatar
          src      = {theme.avatar.male}
          link     = {location.hash === "#2" ? "/App/Interface" : "/App/Story#2"}
          selected = {
            location.hash === "#2"
              ? character.textBackgroundColor
              : theme.page.backgroundColor
          }
          borderColor = {theme.illustrator.textBackgroundColor}
          isChanged   = {props.isChanged_Story2}
        />
        {props.userIsVisible && 
        <Avatar
          src      = {theme.avatar.user_male}
          link     = {"/App/User"}
          selected = {theme.page.backgroundColor}
          borderColor = {theme.user.textBackgroundColor}
          isChanged   = {props.isChanged_History}
        />}
      </nav>
      <div style={content.div}>
        <header style={content.header}>
          <Location 
            isLoaded = {true}
            location = {Country}
          />
          <Weather 
            isLoaded = {IsLoaded}
            isError  = {IsError}
            report   = {WeatherReport}
            index    = {props.weatherIndex}
          />
          <Time
            hours    = {props.hours}
            minutes  = {props.minutes}
            timeZone = {TimeZone}
          />
        </header>
        <main style={content.cards}>
          <Card
            key                 = {CardContent.text.text}
            text                = {CardContent.text.text}
            textPosition        = {CardContent.text.position}
            textWidth           = {CardContent.text.width}
            padding             = {CardContent.text.padding}
            isImg               = {CardContent.media.isImg}
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
