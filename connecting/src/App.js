import "./App.css"
import { ThemeContext, theme } from "./Helpers/Theme"
import Story from "./Pages/Story"

//TODO insert actual components
//ENHANCEMENT - STYLE #12 consider adding responsive effects

function App() {
  return (
    <>
    <ThemeContext.Provider value={theme.story}>
      <Story />
    </ThemeContext.Provider>
    </>
  )
}

export default App
