import axios from 'axios';
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProducts, removeSelectedProducts, decrementQuantity, incrementQuantity } from '../actions/Actions';


export const ProductDetail = ({handleCart}) => {

    const {productId} = useParams();

    const product = useSelector((state) => state.product);
    const quantityState = useSelector((state) => state.changeTheNumber);

    const dispatch = useDispatch();
    const fetchSingleProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("ERR", err);
        })
        dispatch(selectedProducts(response.data));
        // console.log(response.data);
    }

    useEffect(() => {
      if (productId && productId !== "") {
        fetchSingleProduct();
        
      }
      return () =>{
        dispatch(removeSelectedProducts());
      }
      // eslint-disable-next-line
    }, [productId]);

    const {id, title, price, category, image, description} = product;
    const arrowDecrement = "<";
    const arrowIncrement = ">";
    // console.log(product);
    // const [CartItem, setCartItem] = useState([]);
    // const handleCart = () =>{
    //   setCartItem(product);
    //   getItems(CartItem);
    //   console.log(CartItem);
    // }

  return (
    <>
    <div className="container">
      <div className="image-section">
        <img className="image" src={image} alt={id}/>
      </div>
      <div className="details-section">
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        <div className="price-quantity">
          <div className="quantity">
            <button className="btn" onClick={()=>dispatch(decrementQuantity())}> {arrowDecrement} </button>
            <span className="quantity-number"> {quantityState} </span>
            <button className="btn" onClick={()=>dispatch(incrementQuantity())}> {arrowIncrement} </button>
          </div>
          <div className="price">
            <h2>${quantityState > 1 ? price*quantityState : price}</h2>
          </div>
        </div>
        <button className="add-to-cart" onClick={() => handleCart(product)}>Add to Cart</button>
      </div>
    </div>
    </>
  )
}