import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const Header = ({cart}) => {

  const [itemsLength, setItemsLength] = useState([]);
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem('items'));
    console.log(Items);
    if (Items) {
     setItemsLength(Items);
    }
  }, []);
  return (
    <div className="navbar">
      <div className="child brand-name">
        <h2>My Shop</h2>
      </div>
      <div className="child menu-items">
        <ul>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/">About</Link></li>
          <li><Link className='link' to="/">Services</Link></li>
        </ul>
        <div className="cart-icon">
          <Link to='/cartlist'>
          <span><i className="fas fa-cart-plus"></i></span>
          <span>{itemsLength.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
