import "./App.css"
import { ThemeContext, theme } from "./Helpers/Theme"
import { Switch, Route }       from "react-router-dom"

//Pages
// import AppInApp from "./Pages/AppInApp"
import Landing        from "./Pages/Landing"
import Credits        from "./Pages/Credits"
import Considerations from "./Pages/Considerations"


function App() {
  return (
    <Switch>
      <Route path="/App">
        <ThemeContext.Provider value={theme.app}>
          <Considerations />
        </ThemeContext.Provider>
      </Route>
      <ThemeContext.Provider value={theme.landing}>
        <Route path="/Credits">
          <Credits />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </ThemeContext.Provider>
    </Switch>
  )
}

export default App
