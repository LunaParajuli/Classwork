import React, { useContext } from 'react'
import { Global } from './GlobalContext'

const ConD = () => {
  const data = useContext(Global)
  return (
    <>
      {/* <h1>The programming language we are using is {data}</h1> */}

      <h1>The student name is {data.name}</h1>
      <h1>Course enrolled was {data.course}</h1>

    </>
  )
}

export default ConD