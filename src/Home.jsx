import React from 'react'
import Nav from './Nav'
import FetchData from './FetchData'
import ProductList from './ProductList'

function Home() {
    return (
        <div>
            <Nav />
            {/* <FetchData /> */}
            <img src='/images/homepage.jpg' className='homepage--img' />
            <ProductList />
        </div>
    )
}

export default Home
