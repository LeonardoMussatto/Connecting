import React, { useContext } from "react"
import { ThemeContext }      from "../Helpers/Theme"

const Credits = () => {
  let theme = useContext(ThemeContext)
  let page = {
    ...theme.page,
    ...theme.text,
    padding           :  "3vh 2vw",
    display           :  "grid",
    gridTemplateRows  :  "5vh 60vh 30vh",
    gridTemplateAreas :  `
            "header"
            "main" 
            "footer"   
        `,
  }
  let title = {
    ...theme.title,
    gridArea        :  "title",
    placeItems      :  "center center",
    fontSize        :  "7vw",
    fontVariantCaps :  "petite-caps",
    position        :  "sticky",
    top             :  "5vh",
  }
  let main = {
    gridArea   :  "main",
    placeItems :  "center center",
  }
  let footer = {
    gridArea   :  "footer",
    placeItems :  "end center",
    position   :  "sticky",
    bottom     :  "2vh",
  }
  return (
    <div style={page}>
      <header style={title}>Thank You</header>
      <main style={main}>
        <section>
          <p></p>
          <p></p>
          <p></p>
        </section>
        <section>
          <title>Acknowledgment</title>
          {/* <a href=""></a> */}
          {/* <a href=""></a> */}
          {/* <a href=""></a> */}
          {/* <a href=""></a> */}
          {/* <a href=""></a> */}
        </section>
      </main>
      <footer style={footer}>
        {/* <a href=""></a> */}
        {/* <a href=""></a> */}
      </footer>
    </div>
  )
}

export default Credits
