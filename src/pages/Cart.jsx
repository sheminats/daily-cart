import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
import Header from '../components/Header'


function Cart() {
  const cart=useSelector(state=>state.cartReducer)
  const [ totalCartAmount,setTotalCartAmount]=useState(0)
  const dispatch=useDispatch()
const navigate=useNavigate()


  useEffect(()=>{
  if(cart?.length>0){
    setTotalCartAmount(cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
  }else{
    setTotalCartAmount(0)
  }
},[cart])

const handleCheckOut=()=>{
  alert("Order Placed Successfully....Thank You For Shopping With Us!!!!")
  dispatch(emptyCart())
navigate('/')
}


const handleDecrement=(product)=>{
  if(product.quantity==1){
    dispatch(removeCartItem(product.id))
  }
  else{
dispatch(decQuantity(product))
  }
}




  return (
    <>
    <Header/>
    <div style={{marginTop:"100px"}}>
    {cart?.length>0?  <div className="container pt-5">
      <h1 className='text-success fw-bolder '>Cart Summary</h1>
        <div className="row">
          <div className="col-lg-8">
<table className='table  '>
  <thead>
    <tr >
      <th className='text-white'>#</th>
      <th className='text-white'>Product</th>
      <th className='text-white'>Image</th>
      <th className='text-white'>Quantity</th>
      <th className='text-white'>Price</th>
      <th className='text-white'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      cart?.map((product,index)=>(
<tr key={index}>
<td className='text-white'>{index+1}</td>
<td className='text-white'>{product?.title}</td>
<td><img className='img-fluid'width={"60px"} height={'60px'} src={product?.thumbnail} alt="no image" /></td>
<td>
  <div className='d-flex align-items-center'>
    <span onClick={()=>handleDecrement(product)} style={{cursor:'pointer'}}  className=' fw-bolder text-white'>-</span>
  <input style={{width:"50px",}} className='form-control ms-2 me-2 ' type="text" value={product?.quantity} readOnly />
  <span onClick={()=>dispatch(incQuantity(product))} style={{cursor:'pointer'}} className=' fw-bolder text-white'>+</span>
  </div>
  </td>
 
<td className='text-white'>
  ${product?.totalPrice}
</td>
<td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn btn-link'><i className='fa-solid fa-trash text-danger'></i></button></td>
</tr>
      ))
    }
  </tbody>
</table>
<div className="float-end mt-3">
  <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
<Link to={'/'} className='btn btn-success'>Shop More</Link>

</div>
          </div>
          <div className="col-lg-4">
            <div className='shadow border rounded p-4 '>
            <h5 >Total Products : <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
            <h5 >Total Amount   : <span className='fw-bolder text-danger'>{totalCartAmount}</span></h5>
<hr />
<div className='d-grid mt-4'>
  <button onClick={handleCheckOut} className='btn btn-success'>Checkout</button>

</div>
            </div>
             </div>
        </div>
      </div>:
                <div style={{height:"50vh"}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
                <img className='img-fluid'height={"100px"}   src="https://i.postimg.cc/m2q5CLJQ/empty-cart-unscreen.gif" alt="" />
              <h2 className='text-success '>Your Cart Is Empty!!!!</h2>
              </div>
}

    </div>
    </>
  )
}

export default Cart