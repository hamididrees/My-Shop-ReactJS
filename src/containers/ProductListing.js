import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { ProductComponent } from './ProductComponent';
import { setProducts } from '../actions/Actions.js';
export const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("ERR", err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
      fetchProducts();
      // eslint-disable-next-line
    },[])
    
    console.log(products);
  return (
        <ProductComponent/>
  )
}
