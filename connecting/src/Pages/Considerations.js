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
  const content = [
    {id: 1, text: "You have just clicked this link, your friend sent you. Or maybe it was from someone you haven't been hearing much from lately. You should really reach out and see how everything is going."},
    {id: 2, text: "Take some time. Relax. Sit back on your chair. You didn't even notice but you have been getting closer and closer to the screen. Or maybe you are lying on your bed. Under the cover is better."},
    {id: 3, text: "Now that you have found a comfortable position, you don't want to be interrupted. Tell the others not to call you for some time: you are about to take a look at that web experience your friend was talking about."},
    {id: 4, text: "Think about anything you absolutely need to do before taking some time off by yourself, and get it done. Otherwise, don't think about it. Now that you are ready, you start searching for a way to start this experience."}
  ]

  useEffect(() => {
    setTimeout(()=>{
      history.push("/Credits")
    }, 60000)
  }, [history])

  return (
    <main style={page}>
      <article style={textArea}>
        {content.map((element) => (
          <section key={element.id}>
            <p>{element.text}</p>
          </section>
        ))}
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
