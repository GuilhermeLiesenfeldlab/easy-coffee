import React from 'react'
import { useUser } from '../../context/User'

const Product = () => {
  const {state}= useUser()
  return(
    <>
      <h1>Product</h1>
      {state && state.user && state.user.name}
    </>
  )
}

export default Product