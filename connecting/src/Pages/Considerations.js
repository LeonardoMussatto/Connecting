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
    padding: "5vh",
    alignItems: "center",
    gridTemplateColumns: "30vw minmax(100px, 70vw)",
    gridTemplateRows: "90vh",
    gridTemplateAreas: `
    "text image"
    `,
  }
  let textArea = {
    ...theme.text,
    gridArea: "text",
    display: "grid",
    margin: "3%",
    padding: "10%",
    height: "74vh",
    backgroundColor: "#2C2A5C",
    borderRadius: "18px",
    overflowY        :  "scroll",
    scrollBehavior   :  "smooth",
    scrollbarWidth   :  "thin",
  }
  let graphic = {
    gridArea: "image",
    margin: "3%",
    padding: "10%",
    borderRadius: "18px",
    backgroundColor: theme.story.user.backgroundColor,
    color: theme.story.user.color,
    overflow: "clip",
    height: "60vh",
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
              Nonetheless each one influenced one another. Each one knowingly or
              unknowingly relay on the actions, dedication and time of someone
              too often left undefined - lost in the oblivion.
            </p>
          </section>
          <br />
          <section>
            <p>
              We say media is ubiquitous and we think of ourselves as "always
              connected". But are we, truly?
            </p>
            <p>
              Our actions, decision, ideas and beliefs are undeniably the result
              of a deeply intertwined web. A web, however, we often fail to
              perceive.
            </p>
            <p>Or choose to ignore.</p>
            <p>
              The internet gives us the possibility to reach informations from
              all over the world. People however are much more difficult to
              gasp. Informations and services are dematerialized into lifeless
              bits. Everything just seem to "be there" at our disposal. Even
              people loose their materiality and humanity and become just a part
              of the landscape we move in at our will.
            </p>
            <p>
              Do we truly perceive the presence of a real human being, the{" "}
              <em>sweat of the reality</em>, while wandering in our digital
              realities?
            </p>
            <p>
              Bits might be lifeless, but there is always a whole life behind
              them, if one is willing to find it.
            </p>
            <p>
              If one is willing to ask what it does mean to be truly
              connected
            </p>
          </section>
          <br />
          <section>
            <p>
              Perhaps we are still in the progress. Connections aren't yet
              established, but they might be.
            </p>
            <p>Perhaps we are still ...</p>
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
