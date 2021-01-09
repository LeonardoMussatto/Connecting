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
    `,
  }
  let textArea = {
    ...theme.text,
    gridArea        :  "text",
    display         :  "grid",
    margin          :  "3%",
    padding         :  "10%",
    height          :  "74vh",
    backgroundColor :  "#2C2A5C",
    borderRadius    :  "18px",
    overflowY       :  "scroll",
    scrollBehavior  :  "smooth",
    scrollbarWidth  :  "thin",
  }
  let graphic = {
    gridArea        :  "image",
    margin          :  "3%",
    padding         :  "10%",
    borderRadius    :  "18px",
    backgroundColor :  theme.story.user.backgroundColor,
    color           :  theme.story.user.color,
    overflow        :  "clip",
    height          :  "60vh",
  }

  useEffect(() => {
    setTimeout(()=>{
      history.push("/Credits")
    }, 120000)
  }, [history])

  return (
    <main style={page}>
      <article style={textArea}>
        <div>
          <section>
            <p>Different times</p>
            <p>Different places</p>
            <p>Different people</p>
            <p>Different passions</p>
            <p>Different occupations</p>
            <br />
            <p>
              Nevertheless, each has influenced the other. Each consciously or
              unconsciously relies on the actions, dedication and time of
              someone too often left undefined - lost in oblivion.
            </p>
          </section>
          <br />
          <section>
            <p>
              We say that the media is ubiquitous, and we think of ourselves as
              'always connected'. But are we really?
            </p>
            <p>
              Our actions, decisions, ideas and beliefs are undeniably the
              result of a deeply intertwined network. A network, however, that
              we often fail to perceive.
            </p>
            <p>Or that we choose to ignore.</p>
            <p>
              The Internet gives us the possibility to access information all
              over the world. People, however, are much harder to reach. Data
              and services are dematerialised into lifeless bits. Everything
              seems to 'be there' at our disposal. People lose their materiality
              and humanity and become just a part of the landscape in which we
              move at will.
            </p>
            <p>
              Bits may be lifeless, but there is always a whole life behind them
              if one is willing to find it
            </p>
            <p>
              Bits might be lifeless, but there is always a whole life behind
              them, if one is willing to find it.
            </p>
            <p>If one is willing to ask what it means to be truly connected.</p>
          </section>
          <br />
          <section>
            <p>
              Maybe we are still in the process. The connections are not yet
              established, but they could be.
            </p>
            <p>
              Perhaps we are still ... <em>"Connecting..."</em>
            </p>
          </section>
        </div>
      </article>
      <div style={graphic}>
        {/* <Avatar
          src={theme.avatar.female}
          width={"15%"}
          position={"relative"}
          top={"40%"}
          left={"5%"}
          selected={theme.story.ch1.textBackgroundColor}
        />
        <Avatar
          src={theme.avatar.male}
          width={"15%"}
          position={"relative"}
          top={"40%"}
          left={"30%"}
          selected={theme.story.ch2.textBackgroundColor}
        />
        <Avatar
          src={theme.avatar.male}
          width={"15%"}
          position={"relative"}
          top={"40%"}
          left={"50%"}
          selected={theme.story.user.textBackgroundColor}
        /> */}
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
