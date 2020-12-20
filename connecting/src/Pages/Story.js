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

//Content
import Content from "../Content/storyContentPlaceholder.json"


//ENHANCEMENT #18 make the page responsive - add support for mobile devices
//FIX cardIndex has to be restored individually for each story - probably stored in a parent component (/state management?)
// TODO allow different interval between card content
// TODO synch cards between stories


const Story = () => {
  const theme = useContext(ThemeContext)
  const [story, setStory] = useState(theme.ch3)

  let location = useLocation()
  useEffect(() => {
    switch (location.hash) {
      case "#1":
        setStory(theme.ch1)
        setCardIndex(0)
        break
      case "#2":
        setStory(theme.ch2)
        setCardIndex(0)
        break
      case "#3":
        setStory(theme.ch3)
        setCardIndex(0)
        break
      case "#4":
        setStory(theme.ch4)
        setCardIndex(0)
        break

      default:
        break
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])

  const [cardIndex, setCardIndex] = useState(0)
  let cardContent = Content[cardIndex]
  useEffect(() => {
    if (cardIndex === Content.length - 1) {
      setCardIndex(Content.length - 1)
    } else if (cardIndex < Content.length - 1) {
      setTimeout(() => {
        setCardIndex(cardIndex + 1)
      }, 3000)
    }
  }, [cardIndex])

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
      backgroundColor :  story.backgroundColor,
      color           :  story.color,
      overflow        :  "auto"
    },
    header: {
      backgroundColor     :  story.backgroundColor,
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
      borderColor         :  story.borderColor,
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
          link={location.hash === "#1" ? "/app" : "/story#1"}
          selected={
            location.hash === "#1"
              ? story.backgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#2" ? "/app" : "/story#2"}
          selected={
            location.hash === "#2"
              ? story.backgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#3" ? "/app" : "/story#3"}
          selected={
            location.hash === "#3"
              ? story.backgroundColor
              : theme.page.backgroundColor
          }
        />
        <Ch
          width={"60%"}
          link={location.hash === "#4" ? "/app" : "/story#4"}
          selected={
            location.hash === "#4"
              ? story.backgroundColor
              : theme.page.backgroundColor
          }
        />
      </nav>
      <div style={content.div}>
        <header style={content.header}>
          <Location />
          <Weather />
          <Time />
        </header>
        <main style={content.cards}>
          <Card
            key={cardContent.id}
            text={cardContent.text.text}
            src={cardContent.media.src}
            alt={cardContent.media.alt}
          />
          <p>index: {cardIndex}</p>
          {/* {Content.map(card => (
            <Card 
              key={card.id}
              text={card.text.text}
              src={card.media.src}
              alt={card.media.alt}
            />
          ))} */}
        </main>
      </div>
    </div>
  )
}

export default Story
