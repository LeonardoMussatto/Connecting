import React, { useContext, useState, useEffect, useRef } from "react"
import { ThemeContext }  from "../Helpers/Theme"
import { Switch, Route, useLocation } from "react-router-dom"
import Interface from "./Interface"
import Story     from "./Story"
import User from "./User.js"

const AppInApp = () => {
  const theme                             = useContext(ThemeContext)
  let   location                          = useLocation()
  let   d                                 = new Date()
  let   h                                 = d.getUTCHours()
  let   m                                 = d.getUTCMinutes()
  let   z                                 = d.getTimezoneOffset()/60
  const [Hours, setHours]                 = useState(h)
  const [Minutes, setMinutes]             = useState(m)
  const [Story1, setStory1]               = useState(theme.story.ch1.story[0])
  const [Story2, setStory2]               = useState(theme.story.ch2.story[0])
  const [Story3, setStory3]               = useState(theme.story.ch3.story[0])
  const [Story4, setStory4]               = useState(theme.story.ch4.story[0])
  let   time                              = `${Hours}:${Minutes}`
  let   userTime                          = `${Hours - z}:${Minutes}`
  let   ch1Name                           = "ch1"
  let   ch2Name                           = "ch2"
  const [HistoryRecord, setHistoryRecord] = useState([{id: userTime, text: "The user started the demo"}])

  useEffect(() => {
    theme.story.ch1.story.forEach((element) => {
      if (element.id === time || element.timespan === Hours) {
        setStory1(element)
      }
    })
    theme.story.ch2.story.forEach((element) => {
      if (element.id === time || element.timespan === Hours) {
        setStory2(element)
      }
    })
    theme.story.ch3.story.forEach((element) => {
      if (element.id === time || element.timespan === Hours) {
        setStory3(element)
      }
    })
    theme.story.ch4.story.forEach((element) => {
      if (element.id === time || element.timespan === Hours) {
        setStory4(element)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (Minutes === 60) {
        setMinutes(0)
        setHours(Hours + 1)
      } else {
        setMinutes(Minutes + 1)
      }
      if (Hours === 24) {
        setHours(0)
      }
    }, 417) // 24h in 10min, as milliseconds
  }, [Minutes, Hours])

  function useUpdateContent(target, time) {
    useEffect(() => {
      target.story.forEach((element) => {
        if (element.id === time) {
          switch (target) {
            case theme.story.ch1:
              setStory1(element)
              break

            case theme.story.ch2:
              setStory2(element)
              break

            case theme.story.ch3:
              setStory3(element)
              break

            case theme.story.ch4:
              setStory4(element)
              break
            default:
              break
          }
        }
      })
    }, [target, time])
  }
  useUpdateContent(theme.story.ch1, time)
  useUpdateContent(theme.story.ch2, time)
  useUpdateContent(theme.story.ch3, time)
  useUpdateContent(theme.story.ch4, time)

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
  
  useEffect(() => {
    if (location.pathname === "/App/Story") {
      switch (location.hash) {
        case "#1":
          if (prevLocation !== location.pathname || prevStory1 !== Story1) {
            let newHistory = [
              ...HistoryRecord,
              {
                id: userTime,
                text: `The user learned that ${ch1Name} was ${Story1.media.alt}`,
              },
            ]
            setHistoryRecord(newHistory)
          }
          break
        case "#2":
          if (prevLocation !== location.pathname || prevStory2 !== Story2) {
            let newHistory = [
              ...HistoryRecord,
              {
                id: userTime,
                text: `The user learned that ${ch2Name} was ${Story2.media.alt}`,
              },
            ]
            setHistoryRecord(newHistory)
          }
          break

        default:
          break
      }
    }
  }, [
    HistoryRecord,
    Story1,
    Story1.media.alt,
    Story2,
    Story2.media.alt,
    ch1Name,
    ch2Name,
    location.hash,
    location.pathname,
    prevLocation,
    prevStory1,
    prevStory2,
    userTime,
  ])

  return (
    <Switch>
      <Route path={"/App/Interface"}>
        <ThemeContext.Provider value={theme.interface}>
          <Interface />
        </ThemeContext.Provider>
      </Route>
      <Route path={"/App/Story"}>
        <ThemeContext.Provider value={theme.story}>
          <Story
            hours   = {Hours}
            minutes = {Minutes}
            story1  = {Story1}
            story2  = {Story2}
            story3  = {Story3}
            story4  = {Story4}
          />
        </ThemeContext.Provider>
      </Route>
      <Route path={"/App/User"}>
        <ThemeContext.Provider value={theme.story.page}>
          <User history={HistoryRecord} />
        </ThemeContext.Provider>
      </Route>
    </Switch>
  )
}

export default AppInApp
