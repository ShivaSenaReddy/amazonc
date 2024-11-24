import React, { useContext } from 'react'
import { StoreContext } from './main'

function Product({ title, price, rating, imgsource, id }) {
  const yo = useContext(StoreContext)
  console.log(yo)
  return (
    <div className='product'>

      <div>
        <img src={imgsource} className='product--img' />
      </div>
      <div>
        <div>
          <p>{title}</p>
          <p>{price}</p>
          <p>{yo.store}</p>
          <p>{new Array({ rating }).fill('⭐')}</p>
        </div>
        <button onClick={() => yo.addToCart(price, id, rating, imgsource)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
