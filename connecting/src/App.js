import "./App.css"
import { ThemeContext, theme } from "./Helpers/Theme"
import Interface from "./Pages/Interface"

//TODO insert actual components
//ENHANCEMENT - STYLE #12 consider adding responsive effects

function App() {
  return (
    <>
    <ThemeContext.Provider value={theme.interface}>
      <Interface />
    </ThemeContext.Provider>
    </>
  )
}

export default App
