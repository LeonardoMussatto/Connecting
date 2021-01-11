import React from "react"

const Location = (props) => {
  if (!props.isLoaded) {
    return <p>...</p>
  } else {
    return <p>{props.location}</p>
  }
}

export default Location
