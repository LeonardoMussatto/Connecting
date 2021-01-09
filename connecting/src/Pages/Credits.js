import React, { useContext } from "react"
import { ThemeContext }      from "../Helpers/Theme"

//Components
import Link from "../Components/Shared/Link"
import GitHub from "../Media/Icons/Social/GitHub-Mark-Light-120px-plus.png"


const Credits = () => {
  let theme = useContext(ThemeContext)
  let page = {
    backgroundColor     :  "#3B3156",
    color               :  "#F5FFFE",
    padding             :  "3vh 2vw",
    display             :  "grid",
    placeItems          :  "center center",
    gridTemplateColumns :  "96vw",
    gridTemplateRows    :  "20vh 64vh 10vh",
    gridTemplateAreas   :  `
            "header"
            "main"
            "footer"  
        `,
  }
  let title = {
    ...theme.title,
    gridArea        :  "header",
    display         :  "grid",
    placeItems      :  "start center",
    fontSize        :  "5vw",
    fontVariantCaps :  "petite-caps"
  }
  let main = {
    ...theme.text,
    gridArea            :  "main",
    display             :  "grid",
    alignItems          :  "center",
    gridTemplateColumns :  "minmax(100px, 70vw) 30vw",
    gridTemplateRows    :  "100%",
    gridTemplateAreas   :  `
    "text links"
    `,
  }
  let text = {
    placeSelf       :  "center center",
    width           :  "70%",
    backgroundColor :  "#4D426D",
    padding         :  "4%",
    borderRadius    :  "18px"

  }
  let aside = {
    gridArea        :  "links",
    placeSelf       :  "center start",
    width           :  "50%",
    backgroundColor :  "#4D426D",
    padding         :  "5%",
    borderRadius    :  "18px"
  }
  let footer = {
    gridArea      :  "footer",
    alignSelf     :  "center",
    display       :  "flex",
    flexDirection :  "row",
    placeItems    :  "start center"
  }
  let subtitle = {
    fontFamily      :  "Quicksand, sans-serif",
    fontSize        :  "1.8em",
    fontWeight      :  "400",
    backgroundColor :  "inherit",
  }
  let sideTitle = {
    fontFamily      :  "Quicksand, sans-serif",
    fontSize        :  "1.2em",
    fontWeight      :  "400",
    backgroundColor :  "inherit"
  }
  
  return (
    <div style={page}>
      <p style={title}>Connecting...</p>
      <div style={main}>
        <main style={text}>
          <p style={subtitle}>Thank you</p>
          <section>
            <p>
              Thank you for taking some time off to take a look at this website.
            </p>
            <p>
              I hope you enjoyed the experience and that it aroused some
              considerations of your own.
            </p>
            <p>
              This is a way for me to perhaps bring a little more attention to
              how we perceive - or do not perceive - the other in contemporary
              times. But it is also a way to practice and improve my web
              development skills. The source code of this website is available
              on GitHub, along with a brief journal I kept while developing it.
            </p>
            <p>
              Feel free to reach out on GitHub. The project is still under
              development.
            </p>
          </section>
        </main>
        <aside style={aside}>
          <section>
            <p style={sideTitle}>Acknowledgment</p>
            <div>
              <p>Illustrations by</p>
              <ul>
                <li>
                  <Link href="https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34">
                    Julia
                  </Link>
                </li>
                <li>
                  <Link href="https://dribbble.com/thierryfousse">
                    Thierry Fousse
                  </Link>
                </li>
                <li>
                  <Link href="https://dribbble.com/AnnaGolde">Anna Golde</Link>
                </li>
                <li>
                  <Link href="https://icons8.com/">Icons8</Link>
                </li>
                <li>
                  <Link href="https://isometriclove.com/">Isometric Love</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>Gifs by</p>
              <ul>
                <li>
                  <Link href="http://www.lobsterstudio.tv/">
                    Lobster Studio
                  </Link>
                </li>
                <li>
                  <Link href="https://giphy.com/skrzat">Ellie Skrzat</Link>
                </li>
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <footer style={footer}>
        <Link
          isButton={true}
          src={GitHub}
          href="https://github.com/LeonardoMussatto/Connecting"
        >
          GitHub Repository
        </Link>
      </footer>
    </div>
  )
}

export default Credits
