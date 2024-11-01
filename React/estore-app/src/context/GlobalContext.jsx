import React, { createContext } from 'react'



export const Global = createContext()
const student = {
  name: "Hari Shrestha",
  course: "fron end with react",

}

export const GlobalContext = (props) => {
  return (
    <Global.Provider value={student}>
      {props.children}
    </Global.Provider>

  )
}

