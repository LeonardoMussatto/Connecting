import React, { useContext } from "react"
import { ThemeContext } from "../Helpers/Theme"

const User = (props) => {
  let theme = useContext(ThemeContext)
  let page = {
    ...theme,
    display: "flex",
    flexDirection: "column",
  }
  let history = props.history.map((entry) => (
    <div key={entry.id}>
      <p>{entry.id} {entry.text}</p>
      <br />
    </div>
  ))
  return <main style={page}>{history}</main>
}

export default User
