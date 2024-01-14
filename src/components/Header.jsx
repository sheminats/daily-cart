import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,} from 'react-router-dom';
import {Badge} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { searchByProduct } from '../Redux/Slices/productSlice';

function Header({insideHome}) {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
const dispatch=useDispatch()
  return (
    <div>
         <Navbar style={{zIndex:1}} expand="lg" className="q1 w-100 position-fixed top-0">
      <Container>
            <Navbar.Brand> <Link to={'/'} className='text-black fw-bolder ' style={{textDecoration:'none'}} href="#home"><i className="fa-solid fa-truck-fast me-2"></i> Daily Cart</Link></Navbar.Brand>
    
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
{ insideHome&&<Nav.Link><input onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))} style={{width:"400px"}}placeholder='Search Products..' type='text'className='rounded ms-4'></input></Nav.Link>
}            
<Nav.Link ><Link to={'/wishlist'}style={{textDecoration:"none",color:"white"}}> <i className='fa-solid fa-heart text-success'></i>
            Wishlist <Badge className='bg-black text-white'>{wishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link> <Link to={'/cart'} style={{textDecoration:"none",color:"white"}}>Cart<i className='fa-solid fa-cart-plus text-success'></i> <Badge className='bg-black text-white'>{cart?.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    </div>
  )
}

export default Header