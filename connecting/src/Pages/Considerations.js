import React, { useContext, useEffect } from 'react'
import { ThemeContext }                 from '../Helpers/Theme'
import { useHistory }                   from "react-router-dom"

//Components
import Avatar from "../Components/Shared/Avatar"

const Considerations = () => {
  const history = useHistory()
  const theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    padding             :  "5vh",
    alignItems          :  "center",
    gridTemplateColumns :  "30vw minmax(100px, 70vw)",
    gridTemplateRows    :  "90vh",
    gridTemplateAreas   :  `
    "text image"
    `
  }
  let textArea={
    ...theme.text,
    gridArea        :  "text",
    margin          :  "3%",
    padding         :  "10%",
    backgroundColor :  "#2C2A5C",
    borderRadius    :  "18px",
    // borderStyle     :  "solid",
    // borderWidth     :  "4px",
    // borderColor     :  "#1C1B3A",
    overflow        :  "hidden",
    height: "74vh",
  }
  let graphic ={
    gridArea        :  "image",
    margin          :  "3%",
    padding         :  "10%",
    borderRadius    :  "18px",
    // borderStyle     :  "solid",
    // borderWidth     :  "4px",
    // borderColor     :  "#1C1B3A",
    backgroundColor :  theme.story.user.backgroundColor,
    color           :  theme.story.user.color,
    overflow        :  "clip",
    height: "60vh",
  }

  useEffect(() => {
    setTimeout(()=>{
      history.push("/Credits")
    }, 60000)
  }, [history])

  return (
    <main style={page}>
      <article style={textArea}>
        <p>Different times</p>
        <p>Different places</p>
        <p>Different people</p>
        <p>Different passions</p>
        <p>Different occupations</p>
        <br/>
        <p>Nonetheless each one influenced one another. Knowingly or unknowingly relaying on the actions, dedication and time of someone too often left undefined and thus forgotten, further afar than we are used to perceive and willing to investigate.</p>
        <br/>
        <p>We think of ourselves as "always connected". But are we really?</p>
        <p>Our actions, decision, ideas and beliefs are the result of a deeply intertwined web we often fail to perceive.</p>
        <p>Or choose to ignore.</p>
        {/* <p>Today as never before the effect, the cause and the conditions of the simplest of our actions are often difficult to trace and utterly unlinear.</p> */}
        <p>The internet gives us the possibility to reach informations from all over the world. People however are much more difficult to gasp. Informations and services are dematerialized into lifeless bits. Everything just seem to "be there". Even people loose their materiality and humanity and become just a part of the landscape we move in at our will.</p>
        <p>Do we truly perceive the presence, the <em>sweat of the reality</em>, while wandering in our digital realities? </p>
        <p>Bits might be lifeless, but there is always a whole life behind them, if one is willing to find it.</p>
        <p>What does it mean to be truly connected?</p>
        <br/>
        <p>Perhaps we are still in the progress. Connections aren't yet established.</p>
        <p>Perhaps we are still ...</p>
      </article>
      <div style={graphic}>
        {/* <Avatar src={theme.avatar.female} width={"15%"} position={"relative"} top={"40%"} left={"15%"} selected={theme.story.ch1.textBackgroundColor}/>  
        <Avatar src={theme.avatar.male} width={"15%"} position={"relative"} top={"40%"} left={"25%"} selected={theme.story.ch2.textBackgroundColor}/>  
        <Avatar src={theme.avatar.male} width={"15%"} position={"relative"} top={"40%"} left={"35%"} selected={theme.story.user.textBackgroundColor}/> */}
        <Avatar
          src={theme.avatar.female}
          width={"15%"}
          position={"relative"}
          top={"20%"}
          left={"27%"}
          selected={theme.story.ch1.textBackgroundColor}
        />
        <Avatar
          src={theme.avatar.male}
          width={"15%"}
          position={"relative"}
          top={"35%"}
          left={"43%"}
          selected={theme.story.ch2.textBackgroundColor}
        />
        <Avatar
          src={theme.avatar.male}
          width={"15%"}
          position={"relative"}
          top={"65%"}
          left={"5%"}
          selected={theme.story.user.textBackgroundColor}
        />
      </div>
    </main>
  )
}

export default Considerations
