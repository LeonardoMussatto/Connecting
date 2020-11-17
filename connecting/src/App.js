import "./App.css"
import { ThemeContext, theme } from "./Helpers/Theme"
import Landing from "./Pages/Landing"

//TODO insert actual components
//ENHANCEMENT - STYLE #12 consider adding responsive effects

function App() {
  return (
    <>
    <ThemeContext.Provider value={theme.interface}>
      <Landing />
    </ThemeContext.Provider>
    </>
  )
}

export default App
