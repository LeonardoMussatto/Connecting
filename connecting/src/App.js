import "./App.css"
import { ThemeContext, theme } from "./Helpers/Theme"
import { Switch, Route }       from "react-router-dom"

//Pages
import Interface from "./Pages/Interface"
import Story     from "./Pages/Story"
import Landing   from "./Pages/Landing"

//TODO insert actual components
//ENHANCEMENT - STYLE #12 consider adding responsive effects

function App() {
  return (
    <Switch>
      <Route path="/app">
        <ThemeContext.Provider value={theme.interface}>
          <Interface />
        </ThemeContext.Provider>
      </Route>
      <Route path="/story">
        <ThemeContext.Provider value={theme.story}>
          <Story />
        </ThemeContext.Provider>
      </Route>
      <Route>
        <ThemeContext.Provider value={theme.landing}>
          <Landing path="/" />
        </ThemeContext.Provider>
      </Route>
    </Switch>
  )
}

export default App
