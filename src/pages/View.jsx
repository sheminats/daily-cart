import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../components/Header';

function View() {
 const {id}= useParams()
  // console.log(id);
  const[product,setProduct]=useState({})
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  console.log(wishlist);
  const handleWishlist=(product)=>{
    const existingProduct=wishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product is already in your wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }
  
  return (
    <>
    <Header/>
    <div style={{paddingTop:"100px"}}>
      <div className='container mt-3   mb-5'>
<div className="row align-items-center ">
  <div className="col-lg-1"></div>
  <div className="col-lg-4">
    <img height={'300px'}className='img-fluid' src={product?.thumbnail} alt="" />
  </div>
  <div className="col-lg-1"></div>
  <div className="col-lg-6">
    <span className='text-danger fw-bold' >Product Id: {product?.id}</span>
    <h1>{product?.title}</h1>
    <h5 className='fw-bold text-success'>$ {product?.price}</h5>
    <p style={{textAlign:"justify"}}>Description: {product?.description}</p>
    <div className="d-flex justify-content-between mt-5">
      <button onClick={()=>handleWishlist(product)} className='btn btn-outline-light text-white'> <i className='fa-solid fa-heart text-danger'></i> Add To Wishlist</button>
      <button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline-light text-white'> <i className='fa-solid fa-cart-plus text-success'></i> Add To Cart</button>

      </div> 
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default View