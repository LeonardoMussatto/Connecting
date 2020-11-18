import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"
import Card from "../Components/Stories/Card"

//Header
import Location from "../Components/Stories/Location"
import Weather from "../Components/Stories/Weather"
import Time from "../Components/Stories/Time"

//Characters Placeholders
import Ch from "../Components/Shared/ChPlaceholder"


// TODO #5 find a way to organize content - NOTE it seems to me that the content is to case-related to be actually managed by a component, however I also have to
// TODO #6 find a way to conditionally display section of content based on timing


const Story = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    padding: "0",
    gridTemplateColumns: "minmax(80px, 14vw) auto",
    gridTemplateRows: "4rem 90vh",
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
    backgroundColor: theme.ch1.backgroundColor,
    gridArea: "header",
    display: "grid",
    placeItems: "center center",
    gridTemplateColumns: "auto-fill",
    gridAutoFlow: "column"
  }
  let story = {
    backgroundColor: theme.ch1.backgroundColor, //it will actually be a state and change accordingly to the displayed story
    color: theme.ch1.color,
    gridArea: "story",
    display: "grid",
    placeItems: "center start",
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
          imgColor  = {"8466f2"}
        />
        <Card
          txtLength = {"short"}
          imgWidth  = {"200"}
          imgHeight = {"600"}
          imgColor  = {"8466f2"}
        />
      </main>
    </div>
  )
}

export default Story
