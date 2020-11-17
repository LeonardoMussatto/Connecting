import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"
import Card from "../Components/Stories/Card"

//Header
import Location from "../Components/Stories/Location"
import Weather from "../Components/Stories/Weather"
import Time from "../Components/Stories/Time"

//Characters Placeholders
import { ReactComponent as Ch1 } from "../Media/Icons/Ch1.svg"
import { ReactComponent as Ch2 } from "../Media/Icons/Ch2.svg"
import { ReactComponent as Ch3 } from "../Media/Icons/Ch3.svg"
import { ReactComponent as Ch4 } from "../Media/Icons/Ch4.svg"


// STYLE #10 define the layout - see issue for more info

// TODO #5 find a way to organize content - NOTE it seems to me that the content is to case-related to be actually managed by a component, however I also have to
// TODO #6 find a way to conditionally display section of content based on timing


const Story = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={theme}>
      <header>
        <Location />
        <Weather />
        <Time />
      </header>
      <nav>
        <Ch1 />
        <Ch2 />
        <Ch3 />
        <Ch4 />
      </nav>
      <main>
        <Card
          txtLength = {"long"}
          imgWidth  = {"400"}
          imgHeight = {"200"}
          imgColor  = {"f2f2f2"}
        />
        <Card
          txtLength = {"short"}
          imgWidth  = {"200"}
          imgHeight = {"600"}
          imgColor  = {"f2D2f2"}
        />
      </main>
    </div>
  )
}

export default Story
