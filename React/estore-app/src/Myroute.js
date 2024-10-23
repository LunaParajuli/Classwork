import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './components/First'
import Second from './components/Second'
import { Test, Third } from './components/Third'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import ProductDetail from './pages/ProductDetail'



const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<First />} />
          <Route path='/second' element={<Second />} />
          <Route path='/third' element={<Third />} />
          <Route path='/test' element={<Test />} /> */}


          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='product' element={<Productpage />} />
            <Route path='productdetail/:productId' element={<ProductDetail />} />
          </Route>

        </Routes>
      </Router >
    </>
  )
}

export default Myroute

