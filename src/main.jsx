import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
const StoreContext = createContext('');
const myShoppingCart = []
const addToCart = function (price, id, rating, imgsource) {
  console.log('added to cart', price);
  myShoppingCart.push({ 'price': price, 'id': id, 'rating': rating, 'imgsource': imgsource })
  console.log(myShoppingCart)
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContext.Provider value={{ 'store': 'yo', 'addToCart': addToCart }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </StrictMode>,
)
export { StoreContext, myShoppingCart }