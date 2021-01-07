import { ThemeContext, theme } from "./Helpers/Theme"
import { Switch, Route }       from "react-router-dom"

//Pages
import AppInApp       from "./Pages/AppInApp"
import Landing        from "./Pages/Landing"
import Credits        from "./Pages/Credits"
import Considerations from "./Pages/Considerations"


function App() {
  return (
    <Switch>
      <Route path="/App">
        <ThemeContext.Provider value={theme.app}>
          <AppInApp />
        </ThemeContext.Provider>
      </Route>
      <Route path="/Considerations">
        <ThemeContext.Provider value={theme.app}>
          <Considerations />
        </ThemeContext.Provider>
      </Route>
      <Route path="/Credits">
        <ThemeContext.Provider value={theme.landing}>
          <Credits />
        </ThemeContext.Provider>
      </Route>
      <Route path="/">
        <ThemeContext.Provider value={theme.landing}>
          <Landing />
        </ThemeContext.Provider>
      </Route>
    </Switch>
  )
}

export default App
