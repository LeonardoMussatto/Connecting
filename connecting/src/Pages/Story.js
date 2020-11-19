import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"
import Card from "../Components/Stories/Card"

//Header
import Location from "../Components/Stories/Location"
import Weather from "../Components/Stories/Weather"
import Time from "../Components/Stories/Time"

//Characters Placeholders
import Ch from "../Components/Shared/ChPlaceholder"


//ENHANCEMENT #18 make the page responsive - add support for mobile devices
// TODO #5 find a way to organize content - NOTE it seems to me that the content is to case-related to be actually managed by a component, however I also have to
// TODO #6 find a way to conditionally display section of content based on timing


const Story = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    padding: "0",
    gridTemplateColumns: "minmax(80px, 14vw) auto",
    gridTemplateRows: "4rem calc(100vh - 4rem)",
    gridTemplateAreas: `
      "nav header"
      "nav story"
    `
  }
  let nav = {
    padding: "10% 5%",
    gridArea: "nav",
    display: "grid",
    placeItems: "center center"
  }
  let header = {
    backgroundColor: theme.ch3.backgroundColor,
    gridArea: "header",
    display: "grid",
    placeItems: "center center",
    gridTemplateColumns: "auto-fill",
    gridAutoFlow: "column"
  }
  let story = {
    backgroundColor: theme.ch3.backgroundColor, //it will actually be a state and change accordingly to the displayed story
    color: theme.ch3.color,
    gridArea: "story",
    display: "grid",
    placeItems: "center start",
    rowGap: "10vh",
    padding: "0 5%",
    overflow: "auto"
  }
  return (
    <div style={page}>
      <header style = {header}>
        <Location />
        <Weather />
        <Time />
      </header>
      <nav style={nav}>
        <Ch width={"60%"}/>
        <Ch width={"60%"}/>
        <Ch width={"60%"}/>
        <Ch width={"60%"}/>
      </nav>
      <main style={story}>
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
