import React, { useContext } from "react"
import { ThemeContext }      from "../Helpers/Theme"
import { Link }              from "react-router-dom"

//Components
import img from "../Media/Icons/Social/Logo-04.svg"

//ENHANCEMENT #17 make the page responsive - support for mobile devices
//ENHANCEMENT add delayed display to landing text

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
    margin       :  "2vh 2vw"
  }
  let text = {
    ...theme.text,
    padding      :  "2.5vh 2vw",
    margin       :  "0",
    borderRadius :  "18px",
    background: "#4D426D",
    boxShadow:  "inset 5px 5px 10px #3f3659, inset -5px -5px 10px #5b4e81"
  }
  let logo ={
    gridArea     :  "side",
    placeSelf    :  "center center",
    width        :  "50%",
    minWidth     :  "10ch",
    minHeight    :  "44px",
    borderRadius :  "100%",
    // background: "#4D426D",
    // boxShadow:  "5px 5px 10px #3f3659, -5px -5px 10px #5b4e81",
    background: "linear-gradient(315deg, #524775, #453b62)",
    boxShadow:  "-14px -14px 28px #3f3659, 14px 14px 28px #5b4e81",
    padding: "2%"
  }

  const content = [
    {
      id: 1,
      text:
        "You just clicked on this link that your friend sent you. Or maybe it was sent by someone you haven't heard much from lately. You should get in touch and see how everything is going. Or perhaps you just remembered you've had this link in your bookmarks for a while and wondered what it was. Well...",
    },
    {
      id: 2,
      text:
        "Take some time. Relax. Sit back in your chair. You haven't even noticed, but you've been getting closer and closer to the screen. Or maybe you're lying on your bed. Get under the blanket. That's always better. If you just woke up, you should finish making that cup of coffee before you start. You wouldn't want to forget it.",
    },
    {
      id: 3,
      text:
        "Now that you've found a comfortable position, you don't want to be interrupted. Tell others not to call you for a while: you're about to check out that web experience your friend was talking about. Maybe no one heard you - try a second time. Or if you don't want to, hopefully, no one will bother you.",
    },
    {
      id: 4,
      text:
        "Think about everything you have to do before you take some time alone and do it. Otherwise, don't think about it. Otherwise, don't think about it. Now that you are ready, you start looking for a way to begin this experience. Here it is. You click it and ...",
    },
  ]
  
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
      <Link to="/App/Interface" style={logo}><img src={img} alt=""/></Link>
    </div>
  )
}

export default Landing
