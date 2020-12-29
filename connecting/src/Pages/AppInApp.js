import React, { useContext, useState, useEffect } from "react"
import { ThemeContext }  from "../Helpers/Theme"
import { Switch, Route } from "react-router-dom"
import Interface from "./Interface"
import Story     from "./Story"

const AppInApp = () => {
  const theme                 = useContext(ThemeContext)
  let   d                     = new Date()
  let   h                     = d.getUTCHours()
  let   m                     = d.getUTCMinutes()
  const [Hours, setHours]     = useState(h)
  const [Minutes, setMinutes] = useState(m)
  const [Story1, setStory1]   = useState(theme.story.ch1.story[0])
  const [Story2, setStory2]   = useState(theme.story.ch2.story[0])
  const [Story3, setStory3]   = useState(theme.story.ch3.story[0])
  const [Story4, setStory4]   = useState(theme.story.ch4.story[0])
  let   time                  = `${Hours}:${Minutes}`

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
    </Switch>
  )
}

export default AppInApp
