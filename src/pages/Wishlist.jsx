import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../components/Header';




function Wishlist() {
  //get wishlist from store
  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch=useDispatch()
  // console.log(wishlist);

const handleRemoveWishlist=(product)=>{
  dispatch(removeFromWishlist(product?.id))
  dispatch(addToCart(product))

}




  return (
    <>
    <Header/>
    <div style={{ marginTop: "150px" }}>
      <div className='container'>
        <Row className='mt-5'>
          {wishlist?.length>0?wishlist?.map((product,index)=>(
           <Col key={index} style={{ marginBottom: "10px" }} sm={12} md={6} lg={4} xl={3}>
           <Card className='card shadow' style={{ width: '18rem' }}>
             <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
             <Card.Body>
               <Card.Title>{product?.title.slice(0,20)}....</Card.Title>
               <div className='d-flex justify-content-between'>
               <button onClick={()=>dispatch(removeFromWishlist(product?.id))} className='btn btn-link'><i className="fa-solid fa-heart-circle-minus text-danger"></i></button>
               <button onClick={()=>handleRemoveWishlist(product)} className='btn btn-link '><i className="fa-solid fa-cart-plus text-success"></i></button>

               </div>
             </Card.Body>
           </Card>
         </Col> 
          )) :
          <div style={{height:"40vh"}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
            <img className='img-fluid'height={"100px"}   src="https://i.postimg.cc/m2q5CLJQ/empty-cart-unscreen.gif" alt="" />
          <h2 className='text-success mb-5'>Your Wishlist Is Empty!!!!</h2>
          </div>
}

        </Row>
      </div>
    </div>
    </>
  )
}

export default Wishlist