import React from 'react'
import Product from './Product'
import { products } from './products'
function ProductList() {
    const arr = products.map(pro => <Product title={pro.title}
        rating={pro.rating}
        imgsource={pro.imgsource}
        price={pro.price}
        id={pro.id}
    />)
    return (
        <div className='productList'>
            {arr}
        </div>
    )
}

export default ProductList
