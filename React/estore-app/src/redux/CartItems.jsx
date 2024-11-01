import React from 'react'
import { useSelector } from 'react-redux'

const CartItems = () => {

  const data = useSelector(store => store.initialData)

  return (
    <>
      <h1>The number of product present in a cart is {data.cartData}</h1>
    </>
  )
}

export default CartItems