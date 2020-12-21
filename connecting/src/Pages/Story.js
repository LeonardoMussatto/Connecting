import React, { useContext,useState, useEffect } from "react"
import { useLocation }  from "react-router-dom"
import { ThemeContext } from "../Helpers/Theme"

//Header
import Location from "../Components/Stories/Location"
import Weather  from "../Components/Stories/Weather"
// import Time     from "../Components/Stories/Time"

//Placeholders
import Ch   from "../Components/Shared/ChPlaceholder"
import Card from "../Components/Shared/Card"


//ENHANCEMENT #18 make the page responsive - add support for mobile devices


const Story = (props) => {
  const theme = useContext(ThemeContext)
  const [character, setCharacter] = useState(theme.ch3)
  const [CardContent, setCardContent] = useState(character.story[0]) //REM choose a def. state

  let location = useLocation()
  useEffect(() => {
    switch (location.hash) {
      case "#1":
        setCharacter(theme.ch1)
        setCardContent(props.story1)
        break
      case "#2":
        setCharacter(theme.ch2)
        setCardContent(props.story2)
        break
      case "#3":
        setCharacter(theme.ch3)
        setCardContent(props.story3)
        break
      case "#4":
        setCharacter(theme.ch4)
        setCardContent(props.story4)
        break

      default:
        break
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, props.seconds])

  let page = {
    ...theme.page,
    padding             :  "0",
    display             :  "grid",
    gridTemplateColumns :  "minmax(80px, 14vw) auto",
    gridTemplateRows: "100vh",
    gridTemplateAreas   :  `
      "nav story"
    `
  }
  let nav = {
    padding    :  "10% 5%",
    gridArea   :  "nav",
    display    :  "grid",
    placeItems :  "center center"
  }
  let content = {
    div: {
      display: "grid",
      gridTemplateRows    :  "4rem calc(100vh - 4rem)",
      gridTemplateColumns :  "1fr",
      gridTemplateAreas   : `
        "header"
        "cards"
        `,
      margin          :  "2%",
      borderRadius    :  "18px",
      backgroundColor :  character.backgroundColor,
      color           :  character.color,
      overflow        :  "auto"
    },
    header: {
      backgroundColor     :  character.backgroundColor,
      margin              :  "0 2%",
      gridArea            :  "header",
      display             :  "grid",
      placeItems          :  "center center",
      gridTemplateColumns :  "repeat(1fr)",
      gridAutoFlow        :  "column",
      position            :  "sticky",
      top                 :  "2%",
      borderRadius        :  "18px",
      borderStyle         :  "solid",
      borderWidth         :  "4px",
      borderColor         :  character.borderColor,
    },
    cards: {
      gridArea        :  "cards",
      display         :  "grid",
      placeItems      :  "center start",
      rowGap          :  "10vh",
      padding         :  "0 5%",
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
              ? character.backgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#2" ? "/App/Interface" : "/App/Story#2"}
          selected={
            location.hash === "#2"
              ? character.backgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#3" ? "/App/Interface" : "/App/Story#3"}
          selected={
            location.hash === "#3"
              ? character.backgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#4" ? "/App/Interface" : "/App/Story#4"}
          selected={
            location.hash === "#4"
              ? character.backgroundColor
              : theme.page.backgroundColor
          }
        />
      </nav>
      <div style={content.div}>
        <header style={content.header}>
          <Location />
          <Weather />
          <p>{props.minutes}:{props.seconds}</p>
          {/* <Time /> */}
        </header>
        <main style={content.cards}>
          <Card
            key={CardContent.id}
            text={CardContent.text.text}
            src={CardContent.media.src}
            alt={CardContent.media.alt}
          />
        </main>
      </div>
    </div>
  )
}

export default Story
