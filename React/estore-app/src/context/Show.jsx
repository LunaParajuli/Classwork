import React from 'react'
import { GlobalContext } from './GlobalContext'
import ComA from './ComA'

const Show = () => {
  return (
    <>
      <GlobalContext>
        <ComA />
      </GlobalContext>

    </>
  )
}

export default Show