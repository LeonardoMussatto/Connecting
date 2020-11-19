import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"

//Components
import Button from "../Components/Shared/Button"
import PlaceholderText from "../Components/Shared/PlaceholderText"

//ENHANCEMENT #17 make the page responsive - support for mobile devices

const Landing = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    padding             :  "0 2vw",
    gridTemplateRows    :  "100vh 85vh",
    gridTemplateAreas   :  `
      'header header'
      'main side'
      `,
  }
  let title = {
    placeSelf       :  "center center",
    gridArea        :  "header",
    fontSize        :  "7vw",
    fontVariantCaps :  "petite-caps",
    position        :  "sticky",
    top             :  "2vh"
  }
  let text = {
    gridArea     :  "main",
    placeSelf    :  "center center",
    justifyItems :  "center",
    width        :  "auto"
  }
  return (
    <main  style = {page}>
      <h1  style = {title}>Connecting...</h1>
      <div style = {text}>
        <PlaceholderText marginTB={"5%"} marginLR={"10%"} length={"long"} />
        <PlaceholderText marginTB={"5%"} marginLR={"10%"} length={"short"} />
      </div>
      <Button
        gridPosition = {"side"}
        place        = {"center center"}
        text         = {"Test Button"}
      />
    </main>
  )
}

export default Landing
