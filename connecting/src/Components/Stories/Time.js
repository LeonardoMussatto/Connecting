import React from "react"

const Time = (props) => {
  let hours = props.hours + props.timeZone
  if (props.timeZone < 0 && props.hours < Math.abs(props.timeZone)) {
    hours = 24 + props.hours + props.timeZone
  }
  let suffix
  if (hours < 12) {
    suffix = "AM"
  } else if (hours === 12) {
    suffix = "PM"
  } else {
    suffix = "PM"
    if (hours < 24) {
      hours = hours - 12
    } else {
      hours = hours - 24
    }
  }
  let minutes
  if (props.minutes >= 10) {
    minutes = props.minutes
  } else {
    minutes = "0" + props.minutes
  }
  return (
    <time>
      {hours}:{minutes} {suffix}
    </time>
  )
}

export default Time
