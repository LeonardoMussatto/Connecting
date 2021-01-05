import React, { useContext } from "react"
import { ThemeContext }      from "../Helpers/Theme"
import { useHistory }        from "react-router-dom"
import Button                from "../Components/Shared/Button"


//ENHANCEMENT #17 make the page responsive - support for mobile devices
//ENHANCEMENT add animations to landing text


const Landing = () => {
  const theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    padding             :  "3vh 2vw",
    gridTemplateRows    :  "100vh minmax(max-content, 70vh)",
    gridTemplateColumns :  "minmax(500px, 60vw) minmax(max-content, 40vw)",
    gridTemplateAreas   :  `
      'header header'
      'main side'
      `,
  }
  let title = {
    ...theme.title,
    placeSelf       :  "center center",
    gridArea        :  "header",
    fontSize        :  "7vw",
    fontVariantCaps :  "petite-caps",
    position        :  "sticky",
    top             :  "5vh"
  }
  let main = {
    gridArea     :  "main",
    display      :  "grid",
    justifyItems :  "center",
    rowGap       :  "1%",
    margin: "2vh 2vw"
  }
  let text = {
    ...theme.text,
    padding      :  "2.5vh 2vw",
    margin       :  "0",
    borderRadius :  "18px"
  }

  const content = [
    {id: 1, text: "You have just clicked this link, your friend sent you. Or maybe it was from someone you haven't been hearing much from lately. You should really reach out and see how everything is going. Or perhaps you just remembered you had this link in your bookmarks for some time now and you were wondering what it is. Well..."},
    {id: 2, text: "Take some time. Relax. Sit back on your chair. You didn't even notice but you have been getting closer and closer to the screen. Or maybe you are lying on your bed. Under the cover is better. If you just woke up, you should finish making yourself that cup of coffee before starting. You don't want to forget about it."},
    {id: 3, text: "Now that you have found a comfortable position, you don't want to be interrupted. Tell the others not to call you for some time: you are about to take a look at that web experience your friend was talking about. Maybe no one heard you... try a second time. Or if you don't want to, let's just hope no one will bother you."},
    {id: 4, text: "Think about anything you absolutely need to do before taking some time off by yourself, and get it done. Otherwise, don't think about it. Now that you are ready, you start searching for a way to start this experience. Here it is. You click it and ..."}
  ]
  
  const history = useHistory()
  const handleClick = () => {
    history.push('App/Interface')
  }
  return (
    <div style={page}>
      <header style={title}>Connecting...</header>
      <main style={main}>
        {content.map((element) => (
          <section key={element.id}>
            <p style={text}>{element.text}</p>
          </section>
        ))}
      </main>
      <Button
        gridPosition = {"side"}
        place        = {"center center"}
        text         = {"Test Button"}
        onClick      = {handleClick}
      />
    </div>
  )
}

export default Landing
