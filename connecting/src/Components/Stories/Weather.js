import React, { useState, useEffect } from "react"

const Weather = (props) => {
  const [Main, setMain] = useState()
  const [Icon, setIcon] = useState()
  let style = {
    display             :  "grid",
    gridTemplateColumns :  "2fr 1fr",
    placeItems          :  "center center"
  }
  let img = {
    width           :  "2.3em",
    padding         :  "1%",
    borderRadius    :  "100%",
    backgroundColor :  "#9992b3"
  }
  let p = {
    paddingRight: "0.75em"
  }


  useEffect(() => {
    if(!props.isError){
    setMain(props.report.hourly[props.index].weather[0].main)
    setIcon(props.report.hourly[props.index].weather[0].icon)
    }
  }, [props.index, props.isError, props.report])
  
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
        <p style={p}>{Main}</p>
        <img style={img} src={`http://openweathermap.org/img/wn/${Icon}.png`} alt=""/>
      </div>
    )
  }
  
}

export default Weather
