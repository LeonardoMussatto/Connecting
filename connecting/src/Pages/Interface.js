import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"

//Placeholders
import PlaceholderText from "../Components/Shared/PlaceholderText"
import Ch from "../Components/Shared/ChPlaceholder"


// TODO #8 create a reusable component for characters icons - they should also contain routes and notification style/logic
//STYLE #13 work on the layout - at the moment I don't like this layout...it's too rigid, I guess + the text has to be placed somewhere else


const Interface = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme,
    padding: "0",
    gridTemplateRows: "7rem calc(100vh - 7rem)",
    gridTemplateColumns: "100%"
  }
  let header = {
    display: "grid",
    placeItems: "center"
  }
  let main = {
    display: "grid",
    padding: "2%",
    gridTemplateColumns : "1fr 1fr 1fr 1fr",
    gridTemplateRows: "repeat(auto-fit, minmax(auto, 1fr))",
    gridTemplateAreas: `
      "icon1 . icon3 ."
      ". icon2 . icon4"
      `,
    placeItems: "center"
  }
  return (
    <div style={page}>
      <header style={header}>
        <PlaceholderText length={"short"} />
      </header>
      <main style={main}>
        <Ch gridArea={"icon1"} width={"25vh"}/>
        <Ch gridArea={"icon2"} width={"25vh"}/>
        <Ch gridArea={"icon3"} width={"25vh"}/>
        <Ch gridArea={"icon4"} width={"25vh"}/>
        {/* <Ch position={"relative"} top={"16vh"} left={"8vw"} width={"25vh"}/>
        <Ch position={"relative"} top={"32vh"} left={"16vw"} width={"25vh"}/>
        <Ch position={"relative"} top={"8vh"} left={"24vw"} width={"25vh"}/>
        <Ch position={"relative"} top={"32vh"} left={"32vw"} width={"25vh"}/> */}
      </main>
    </div>
  )
}

export default Interface
