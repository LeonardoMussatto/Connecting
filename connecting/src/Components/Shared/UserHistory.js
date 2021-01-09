import React, { useContext } from "react"
import { ThemeContext } from "../../Helpers/Theme"
import VideoPlayer from "./VideoPlayer"

const Card = (props) => {
  const theme = useContext(ThemeContext)
  let card = {
    display             :  "grid",
    gridTemplateRows    :  "20vh",
    gridTemplateColumns :  "minmax(7vw, 40vw) minmax(10vw, 30vw)",
    gridTemplateAreas   :  `"left right"`,
    placeItems          :  "center",
  }
  let media = {
    gridArea     :  "right",
    position     :  "center end",
    height       :  "80%",
    borderRadius :  "18px",
  }
  let p = {
    gridArea        :  "left",
    placeSelf       :  "center center",
    backgroundColor :  theme.story.user.textBackgroundColor,
    borderRadius    :  "18px",
    padding         :  "2%",
    width           :  "70%",
  }

  let historyMessage = props.history.map((entry) => (
    <section style={card} key={entry.id}>
      <p style={p}>
        {entry.id} {entry.text}
      </p>
      {entry.media.isImg === "true" ? (
        <img style={media} src={entry.media.src} alt={entry.media.alt} />
      ) : (
        <div style={media}>
          <VideoPlayer
            color    = {entry.media.borderColor}
            src      = {entry.media.src}
            autoplay = {false}
            width    = {"270px"}
            height   = {"152px"}
          />
        </div>
      )}
    </section>
  ))

  return historyMessage
}
export default Card
