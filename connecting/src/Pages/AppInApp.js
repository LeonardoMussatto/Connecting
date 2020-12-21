import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../Helpers/Theme"
import { Switch, Route } from "react-router-dom"
import Interface from "./Interface"
import Story from "./Story"

const AppInApp = () => {
  const theme = useContext(ThemeContext)
  const [Seconds, setSeconds] = useState(0)
  const [Minutes, setMinutes] = useState(0)
  const [Story1, setStory1] = useState(theme.story.ch1.story[0])
  const [Story2, setStory2] = useState(theme.story.ch2.story[0])
  const [Story3, setStory3] = useState(theme.story.ch3.story[0])
  const [Story4, setStory4] = useState(theme.story.ch4.story[0])

  useEffect(() => {
    setTimeout(() => {
      if (Seconds === 60) {
        setSeconds(0)
        setMinutes(Minutes + 1)
      } else {
        setSeconds(Seconds + 1)
      }
    }, 100)
  }, [Seconds, Minutes])

  function useUpdateContent(target, time) {
    useEffect(() => {
      target.story.forEach((element) => {
        //eslint-disable-next-line
        if (element.id == time) {
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
      // return () => {
      //   cleanup
      // }
    }, [target, time])
  }
  useUpdateContent(theme.story.ch1, Minutes)
  useUpdateContent(theme.story.ch2, Minutes)
  useUpdateContent(theme.story.ch3, Minutes)
  useUpdateContent(theme.story.ch4, Minutes)

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
            minutes={Minutes}
            seconds={Seconds}
            story1={Story1}
            story2={Story2}
            story3={Story3}
            story4={Story4}
          />
        </ThemeContext.Provider>
      </Route>
    </Switch>
  )
}

export default AppInApp
