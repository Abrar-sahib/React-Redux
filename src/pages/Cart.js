import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
 
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  // console.log(products);

  const handleRemove = (productid) => {
    dispatch(remove(productid))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {products.map(product => (
            <div key={product.id} className='cartCart'>
              <img src={product.image} alt=''/>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Cart