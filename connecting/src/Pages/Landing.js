import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"

//Components
import Button from "../Components/Shared/Button"
import PlaceholderText from "../Components/Shared/PlaceholderText"


//STYLE #11 work on the centering - for now, create a static scrollable page


const Landing = () => {
  const theme = useContext(ThemeContext)
  let title = {
      textAlign: "center"
  }
  return (
    <main style={theme}>
      <h1 style={title}>Connecting...</h1>
      <PlaceholderText length={"long"} />
      <PlaceholderText length={"short"} />
      <Button text={"Test Button"}/>
    </main>
  )
}

export default Landing