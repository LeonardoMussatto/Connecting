import React from 'react'
import Ch    from "../Components/Shared/ChPlaceholder"

const Considerations = () => {
  let page = {
    display: "grid",
    gridTemplateColumns: "minmax(100px, 30vw) 70vw",
    gridTemplateRows: "100vh",
    gridTemplateAreas: `
    "text image"
    `
  }
  let textArea={
    gridArea: "text",
    padding: "10%",
    backgroundColor: "#4059AD"
  }
  let graphic ={
    gridArea: "image",
    backgroundColor: "#9AAAD9"
  }
    return (
      <main style={page}>
        <article style={textArea}>
          <p>text here</p>
        </article>
        <section stile={graphic}>
          {/* <Ch width={"15%"} position={"relative"} top={"40%"} left={"15%"}/>  
          <Ch width={"15%"} position={"relative"} top={"40%"} left={"25%"}/>  
          <Ch width={"15%"} position={"relative"} top={"40%"} left={"35%"}/> */}
          <Ch width={"15%"} position={"relative"} top={"25%"} left={"27%"}/>  
          <Ch width={"15%"} position={"relative"} top={"35%"} left={"43%"}/> 
          <Ch width={"15%"} position={"relative"} top={"60%"} left={"5%"}/>  
        </section>
      </main>
    )
}

export default Considerations
