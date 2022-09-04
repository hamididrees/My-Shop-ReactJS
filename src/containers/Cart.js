import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import styles from './Cart.module.css';
export const Cart = () => {

  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items])
  
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem('items'));
    console.log(Items);
    if (Items) {
     setItems(Items);
    }
  }, []);
  return (
    <>
    <div className="cart-list-container">
      <div className="cart">
        <div className="products">
          {
            items.map((cartItems) => {
              const {id, title, price, image} = cartItems;
              return (

                  <div className="product" key={id}>

                    <img src={image} alt={id}/>

                    <div className="product-info">

                      <h3 className="product-name">{title}</h3>

                      <h4 className="product-price">${price}</h4>

                      <h4 className="product-offer">50%</h4>

                      <p className="product-quantity"/>Qnt: <span/>

                      <p className="product-remove">

                        <i className="fa fa-trash" aria-hidden="true"></i>

                        <span className="remove">Remove</span>

                      </p>

                    </div>

                  </div>
          
              )
            })
          }
        </div>
      <div className="cart-total">

        <p>

          <span>Total Price</span>

          <span>₹ 3,000</span>

        </p>

        <p>

          <span>Number of Items</span>

          <span>2</span>

        </p>

        <p>

          <span>You Save</span>

          <span>₹ 1,000</span>

        </p>

        <Link to="#" className='link-checkout'>Proceed to Checkout</Link>

        </div>
      </div>
    </div>
    </>
    

  )
}
