import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"

//placeholders
import PlaceholderText from "../Components/Shared/PlaceholderText"
import { ReactComponent as Ch1 } from "../Media/Icons/Ch1.svg"
import { ReactComponent as Ch2 } from "../Media/Icons/Ch2.svg"
import { ReactComponent as Ch3 } from "../Media/Icons/Ch3.svg"
import { ReactComponent as Ch4 } from "../Media/Icons/Ch4.svg"


// TODO #8 create a reusable component for characters icons - they should also contain routes and notification style/logic
//STYLE #13 work on the layout


const Interface = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={theme}>
      <header>
        <PlaceholderText length={"short"} />
      </header>
      <main>
        <Ch1 />
        <Ch2 />
        <Ch3 />
        <Ch4 />
      </main>
    </div>
  )
}

export default Interface
