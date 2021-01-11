import React, { useContext, useState, useEffect, useRef } from "react"
import { Switch, Route, useLocation, useHistory } from "react-router-dom"
import { ThemeContext }               from "../Helpers/Theme"

//Components
import Content        from "../Media/Content/Interface.json"
import Interface      from "./Interface"
import Story          from "./Story"
import User           from "./User"

// FIX notification style/logic
// STYLE add transitions between pages
// REM reactivate end of experience check

const AppInApp = () => {
  const theme = useContext(ThemeContext)

  //Geo API
  const [IsLoaded_Geo, setIsLoaded_Geo] = useState(false)
  const [UserCountry, setUserCountry]   = useState("United Kingdom")
  const [Lat_U, setLat_U]               = useState("51.494720")
  const [Lon_U, setLon_U]               = useState("-0.135278")

  // Weather API
  const [IsLoaded_Weather_U, setIsLoaded_Weather_U] = useState(true)
  const [IsLoaded_Weather_1, setIsLoaded_Weather_1] = useState(true)
  const [IsLoaded_Weather_2, setIsLoaded_Weather_2] = useState(true)
  const [IsError_U, setIsError_U] = useState(true)
  const [IsError_1, setIsError_1] = useState(false)
  const [IsError_2, setIsError_2] = useState(true)
  const [Weather_U, setWeather_U] = useState(theme.user.weather)
  const [Weather_1, setWeather_1] = useState(theme.developer.weather)
  const [Weather_2, setWeather_2] = useState(theme.illustrator.weather)
  const [Country_1, setCountry_1] = useState(theme.locations.TH)
  const [Country_2, setCountry_2] = useState(theme.locations.AR)
  
  //Routing
  const history  = useHistory()
  let   location = useLocation()
  
  //Timing
  let   d                     = new Date()
  let   h                     = d.getUTCHours()
  let   m                     = d.getUTCMinutes()
  let   z                     = d.getTimezoneOffset()/60
  const [Hours, setHours]     = useState(h)
  const [Minutes, setMinutes] = useState(m)
  let   time                  = `${Hours}:${Minutes}`
  let   userTime              = `${Hours - z}:${Minutes}`
  const [CarouselIndex, setCarouselIndex] = useState(0)
  const [WeatherIndex, setWeatherIndex]   = useState(0)
  const [UserIsVisible, setUserIsVisible] = useState(false)

  //Stories' content
  let ch1Name = "Annie"
  let ch2Name = "John"
  const [DeveloperStory, setDeveloperStory] = useState(theme.developer.TH)
  const [IllustratorStory, setIllustratorStory] = useState(theme.illustrator.AR)
  const [Story1, setStory1] = useState(DeveloperStory[0])
  const [Story2, setStory2] = useState(IllustratorStory[0])
  const [HistoryRecord, setHistoryRecord] = useState([{id: userTime, text: "The user started the demo", media: { src: "https://raw.githubusercontent.com/LeonardoMussatto/Connecting/2b5c49e287e7dfa60e0b4bb2c72ddc56f501e4ad/connecting/src/Media/Icons/Social/Logo-04.svg", alt: "placeholder image" }}]) //STYLE add screenshot of Interface.js

  //Notifications
  const [IsChanged_Story1, setIsChanged_Story1]   = useState(false)
  const [IsChanged_Story2, setIsChanged_Story2]   = useState(false)
  const [IsChanged_History, setIsChanged_History] = useState(true)
  
  //Carousel Timing
  useEffect(() => {
    if (CarouselIndex < Content.length - 1) {
      setTimeout(() => {
        setCarouselIndex(CarouselIndex + 1)
      }, 4000)
    }
  })

  //Switch timezone to always let the user first follow the illustrator and then the developer
 useEffect(() => {
  if (h > 12 && h < 22){
    setDeveloperStory(theme.developer.TH)
    setCountry_1(theme.locations.TH)
    setIllustratorStory(theme.illustrator.AR)
    setCountry_2(theme.locations.AR)
  } else {
    setDeveloperStory(theme.developer.AR)
    setCountry_1(theme.locations.AR)
    setIllustratorStory(theme.illustrator.TH)
    setCountry_2(theme.locations.TH)
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

  //Set initial stories' content
  useEffect(() => {
    DeveloperStory.forEach((element) => {
      if (element.id === time || element.timespan === `${Hours}`) {
        setStory1(element)
      }
    })
    IllustratorStory.forEach((element) => {
      if (element.id === time || element.timespan === `${Hours}`) {
        setStory2(element)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  //Sped-up Clock
  useEffect(() => {
    setTimeout(() => {
      if (Minutes === 59) {
        setMinutes(0)
        setHours(Hours + 1)
        setWeatherIndex(WeatherIndex + 1)
      } else {
        setMinutes(Minutes + 1)
      }
      if (Hours === 24) {
        setHours(0)
      }
    }, 624) // 24h in 15min, as milliseconds
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Minutes, Hours])

  //Update stories' content according to the internal clock
  function useUpdateContent(role, target, time) {
    useEffect(() => {
      target.forEach((element) => {
        if (element.id === time) {
          switch (role) {
            case "developer":
              setStory1(element)
              setIsChanged_Story1(true)
              break

            case "illustrator":
              setStory2(element)
              setIsChanged_Story2(true)
              break

            default:
              break
          }
        }
      })
    }, [role, target, time])
  }
  useUpdateContent("developer", DeveloperStory, time)
  useUpdateContent("illustrator", IllustratorStory, time)

  //API request to get geolocation
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded_Geo(true)
          if (result.country !== "US") {
            setUserCountry(result.country_name)
          } else {
            setUserCountry(result.region)
          }
          setLon_U(result.longitude)
          setLat_U(result.latitude)
        },
        (error) => {
          setIsLoaded_Geo(true)
          setUserCountry("somewhere...")
        }
      )
  }, [])

  //API requests to get 48h hourly weather forecast
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${Lat_U}&lon=${Lon_U}&exclude=current,minutely,daily,alerts&appid=abb09cb21d3e3b380dbbcb1b47802918`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded_Weather_U(true)
          setWeather_U(result)
        },
        (error) => {
          setIsError_U(true)
          setIsLoaded_Weather_U(true)
          setWeather_U(theme.user.weather)
        }
      )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Lon_U, Lat_U])

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${Country_1.lat}&lon=${Country_2.lon}&exclude=current,minutely,daily,alerts&appid=abb09cb21d3e3b380dbbcb1b47802918`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded_Weather_1(true)
          setWeather_1(result)
        },
        (error) => {
          setIsError_1(true)
          setIsLoaded_Weather_1(true)
          setWeather_1(theme.developer.weather)
        }
      )
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${Country_2.lat}&lon=${Country_2.lon}&exclude=current,minutely,daily,alerts&appid=abb09cb21d3e3b380dbbcb1b47802918`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded_Weather_2(true)
          setWeather_2(result)
        },
        (error) => {
          setIsError_2(true)
          setIsLoaded_Weather_2(true)
          setWeather_2(theme.illustrator.weather)
        }
      )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Save viewed content to an object to create a history
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  let prevStory1 = usePrevious(Story1)
  let prevStory2 = usePrevious(Story2)
  let prevLocation = usePrevious(location.pathname)
  
  //TODO consider if it is || is the best solution
  useEffect(() => {
    if (location.pathname === "/App/Story") {
      switch (location.hash) {
        case "#1":
          if (prevLocation !== location.pathname || prevStory1 !== Story1) {
            let newHistory = [
              ...HistoryRecord,
              {
                id: userTime,
                text: `The user learned that ${ch1Name} ${Story1.media.message}`,
                media: {
                  isImg       :  Story1.media.isImg,
                  src         :  Story1.media.src,
                  alt         :  Story1.media.alt,
                  borderColor :  theme.developer.textBackgroundColor
                },
              },
            ]
            setHistoryRecord(newHistory)
            setIsChanged_History(true)
          }
          setIsChanged_Story1(false)
          break
        case "#2":
          if (prevLocation !== location.pathname || prevStory2 !== Story2) {
            let newHistory = [
              ...HistoryRecord,
              {
                id: userTime,
                text: `The user learned that ${ch2Name} ${Story2.media.message}`,
                media: {
                  isImg       :  Story2.media.isImg,
                  src         :  Story2.media.src,
                  alt         :  Story2.media.alt,
                  borderColor :  theme.illustrator.textBackgroundColor
                },
              },
            ]
            setHistoryRecord(newHistory)
            setIsChanged_History(true)
          }
          setIsChanged_Story2(false)
          break

        default:
          break
      }
    }
  }, [HistoryRecord, Story1, Story2, ch1Name, ch2Name, location.hash, location.pathname, prevLocation, prevStory1, prevStory2, theme.developer.textBackgroundColor, theme.illustrator.textBackgroundColor, userTime])

  //Show user page and end the experience before when stories come to the end
  useEffect(() => {
    Hours === (h - 1) && setUserIsVisible(true) 
    if (UserIsVisible) {Hours === h && history.push('/Considerations')}
  }, [Hours, UserIsVisible, h, history])

  return (
    <ThemeContext.Provider value={theme}>
      <Switch>
        <Route path={"/App/Interface"}>
          <Interface 
            content           = {Content[CarouselIndex]}
            isChanged_Story1  = {IsChanged_Story1}
            isChanged_Story2  = {IsChanged_Story2}
            isChanged_History = {IsChanged_History}
            userIsVisible     = {UserIsVisible}
          />
        </Route>
        <Route path={"/App/Story"}>
          <Story
            hours             = {Hours}
            minutes           = {Minutes}
            story1            = {Story1}
            story2            = {Story2}
            userIsVisible     = {UserIsVisible}
            isChanged_Story1  = {IsChanged_Story1}
            isChanged_Story2  = {IsChanged_Story2}
            isChanged_History = {IsChanged_History}
            isLoaded_1        = {IsLoaded_Weather_1}
            isLoaded_2        = {IsLoaded_Weather_2}
            isError_1         = {IsError_1}
            isError_2         = {IsError_2}
            weather_1         = {Weather_1}
            weather_2         = {Weather_2}
            weatherIndex      = {WeatherIndex}
            country1          = {Country_1}
            country2          = {Country_2}
          />
        </Route>
        <Route path={"/App/User"}>
          <User 
            hours            = {Hours - z}
            minutes          = {Minutes}
            history          = {HistoryRecord}
            isChanged_Story1 = {IsChanged_Story1}
            isChanged_Story2 = {IsChanged_Story2}
            isLoaded_Geo     = {IsLoaded_Geo}
            isLoaded_Weather = {IsLoaded_Weather_U}
            country          = {UserCountry}
            weatherReport    = {Weather_U}
            weatherError     = {IsError_U}
            weatherIndex     = {WeatherIndex}
            />
        </Route>
      </Switch>
    </ThemeContext.Provider>
  )
}

export default AppInApp
