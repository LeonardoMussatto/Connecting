import React, { useContext,useState, useEffect } from "react"
import { useLocation }  from "react-router-dom"
import { ThemeContext } from "../Helpers/Theme"

//Header
import Location from "../Components/Stories/Location"
import Weather  from "../Components/Stories/Weather"
import Time     from "../Components/Stories/Time"

//Placeholders
import Ch   from "../Components/Shared/ChPlaceholder"
import Card from "../Components/Stories/Card"


//ENHANCEMENT #18 make the page responsive - add support for mobile devices
// TODO #5 find a way to organize content - NOTE it seems to me that the content is to case-related to be actually managed by a component, however I also have to
// TODO #6 find a way to conditionally display section of content based on timing


const Story = () => {
  const theme = useContext(ThemeContext)
  const [story, setStory] = useState(theme.ch3)

  let location = useLocation()
  useEffect(() => {
    switch (location.hash) {
      case "#1":
        setStory(theme.ch1)
        break
      case "#2":
        setStory(theme.ch2)
        break
      case "#3":
        setStory(theme.ch3)
        break
      case "#4":
        setStory(theme.ch4)
        break

      default:
        break
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])

  let page = {
    ...theme.page,
    padding             :  "0",
    display             :  "grid",
    gridTemplateColumns :  "minmax(80px, 14vw) auto",
    gridTemplateRows    :  "4rem calc(100vh - 4rem)",
    gridTemplateAreas   :  `
      "nav header"
      "nav story"
    `
  }
  let nav = {
    padding    :  "10% 5%",
    gridArea   :  "nav",
    display    :  "grid",
    placeItems :  "center center"
  }
  let header = {
    backgroundColor     :  story.backgroundColor,
    gridArea            :  "header",
    display             :  "grid",
    placeItems          :  "center center",
    gridTemplateColumns :  "auto-fill",
    gridAutoFlow        :  "column"
  }
  let content = {
    backgroundColor :  story.backgroundColor,   //it will actually be a state and change accordingly to the displayed story
    color           :  story.color,
    gridArea        :  "story",
    display         :  "grid",
    placeItems      :  "center start",
    rowGap          :  "10vh",
    padding         :  "0 5%",
    overflow        :  "auto"
  }
  return (
    <div style={page}>
      <header style = {header}>
        <Location />
        <Weather />
        <Time />
      </header>
      <nav style={nav}>
        <Ch width={"60%"} link={location.hash === "#1" ? "/app" : "/story#1"} />
        <Ch width={"60%"} link={location.hash === "#2" ? "/app" : "/story#2"} />
        <Ch width={"60%"} link={location.hash === "#3" ? "/app" : "/story#3"} />
        <Ch width={"60%"} link={location.hash === "#4" ? "/app" : "/story#4"} />
      </nav>
      <main style={content}>
        <Card
          txtLength = {"long"}
          imgWidth  = {"400"}
          imgHeight = {"200"}
          imgColor  = {"f2f2f2"}
        />
        <Card
          txtLength = {"short"}
          imgWidth  = {"1000"}
          imgHeight = {"500"}
          imgColor  = {"f2f2f2"}
        />
        <Card
          txtLength = {"long"}
          imgWidth  = {"600"}
          imgHeight = {"600"}
          imgColor  = {"f2f2f2"}
        />
      </main>
    </div>
  )
}

export default Story
