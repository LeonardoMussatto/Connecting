import React, { useContext } from "react"
import { ThemeContext }      from "../Helpers/Theme"
import { useHistory }        from "react-router-dom"

//Components
import Button          from "../Components/Shared/Button"

//ENHANCEMENT #17 make the page responsive - support for mobile devices
//ENHANCEMENT add animations to landing text
//STYLE the page definitely need some restyling

const Landing = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    padding             :  "0 2vw",
    gridTemplateRows    :  "100vh 85vh",
    gridTemplateColumns: "minmax(500px, 60vw) minmax(max-content, 40vw)",
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
    top             :  "7vh"
  }
  let text = {
    gridArea     :  "main",
    placeSelf    :  "center center",
    justifyItems :  "center",
    padding: "2vh 0 0 5vw"
  }
  
  const history = useHistory()
  const handleClick = () => {
    history.push('/app')
  }
  return (
    <main  style = {page}>
      <h1  style = {title}>Connecting...</h1>
      <div style = {text}>
        <p>You have just clicked this link, your friend sent you. Or maybe it was from someone you haven't been hearing much from lately. You should really reach out and see how everything is going. Or perhaps you just remembered you had this link in your bookmarks for some time now and you were wondering what it is. Well...</p>
        <p>You are about to start a web experience. Take some time. Relax. Sit back on your chair. You didn't even notice but you have been getting closer and closer to the screen. Or maybe you are lying on your bed. Under the cover is better. If you just woke up, you should finish making yourself that cup of coffee before starting. You don't want to forget about it.</p>
        <p>Now that you have found a comfortable position, you realize you don't have your headphones with you. There is no rush, take them and come back. Or maybe you are one of those who always have their headphones with them. Well, put them on. Let the world around you fade. You don't want to be interrupted. You know what, you should tell the others not to call you for some time: you are about to take a look at that web experience your friend was talking about. Maybe no one heard you... try a second time. Or if you don't want to, let's just hope no one will bother you.</p>
        <p>Think about anything you absolutely need to do before taking some time off by yourself, and get it done. Otherwise, don't think about it. Now that you are ready, you start searching for a way to start this experience. Here it is. You click it and ...</p>
      </div>
      <Button
        gridPosition = {"side"}
        place        = {"center center"}
        text         = {"Test Button"}
        onClick      = {handleClick}
      />
    </main>
  )
}

export default Landing
