import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './components/First'
import Second from './components/Second'
import { Test, Third } from './components/Third'



const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/second' element={<Second />} />
          <Route path='/third' element={<Third />} />
          <Route path='/test' element={<Test />} />


        </Routes>
      </Router >
    </>
  )
}

export default Myroute