import "./App.css"
import { ThemeContext, theme } from "./Helpers/Theme"
import { Switch, Route }       from "react-router-dom"

//Pages
import AppInApp from "./Pages/AppInApp"
import Landing   from "./Pages/Landing"


//ENHANCEMENT - STYLE #12 consider adding responsive effects


function App() {
  return (
    <Switch>
      <Route path="/App">
        <ThemeContext.Provider value={theme.app}>
          <AppInApp />
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
