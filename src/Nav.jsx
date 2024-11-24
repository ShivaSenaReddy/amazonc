import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import './Nav.css'
import { myShoppingCart } from "./main";
function Nav() {
  return (
    <nav>
      <div>
        <img src="/images/amazonlogo.png" className="amazon-logo" />
      </div>
      <div className="search-Amazon">
        <input type='text' placeholder="search anything in amazon" className="search-Amazon-Input" />
        <IoSearchSharp color="black" size='34px' style={{ 'backgroundColor': 'orange' }} />
      </div>
      <div className="nav--link">
        <h3><Link to='/signin'><span>Hello</span><span>Sign In</span> </Link></h3>
      </div>
      <div className="nav--link">
        <h3><Link to='/returns&orders'><span>Returns</span> <span>&Orders</span></Link></h3>
      </div>
      <div className="nav--link">
        <h3><Link to='/cart'>
          <span>{myShoppingCart.length}</span>
          <span> <BsCart color="white" /></span>
        </Link></h3>
      </div>
    </nav>
  );
}

export default Nav;
