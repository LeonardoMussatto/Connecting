import React from "react"

const Weather = (props) => {
  let style = {
    display             :  "grid",
    gridTemplateColumns :  "2fr 1fr",
    placeItems          :  "center center"
  }
  let img = {
    width           :  "2em",
    borderRadius    :  "100%",
    backgroundColor :  "#9992b3"
  }
  let p = {
    paddingRight: "0.75em"
  }
  
  if (!props.isLoaded){
   return (<div>...</div>)
  } else if (props.isError){
    return (
      <div style={style}>
        <p style={p}>{props.report.main}</p>
        <img style={img} src={`http://openweathermap.org/img/wn/${props.report.icon}.png`} alt=""/>
      </div>
    )
  } else {
    return (
      <div style={style}>
        <p style={p}>{props.report.hourly.weather[props.weatherIndex].main}</p>
        <div style={img}>
         <img src={`http://openweathermap.org/img/wn/${props.report.hourly.weather[props.weatherIndex].icon}.png`} alt=""/>
        </div>
      </div>
    )
  }
  
}

export default Weather
