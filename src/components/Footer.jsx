import React from 'react'
import { Row , Col, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='q1 w-100  ' style={{fontFamily:'Playfair Display'}}>
    <hr />
    <Container className='p-3   text-white'>
      <Row className='w-100 container'>
       <Col lg={3} md={3} >
       <Navbar className="bg-body-black ">
       <Container>
         <Navbar.Brand href="#home">
         <Navbar.Brand> <Link to={'/'} className='text-black fw-bolder mt-5  ' style={{textDecoration:'none'}} href="#home"><i class="fa-solid fa-truck-fast me-2 "></i> Daily Cart</Link></Navbar.Brand>

         </Navbar.Brand>
       </Container>
     </Navbar>
       </Col>



       <Col  lg={3} md={3} style={{fontFamily:'Playfair Display'}}>
       <h4 className='text-white' >Link</h4>
       <a href="home" className='text-white' style={{textDecoration:'none'}} >Home</a><br />
       <a href="wishlist" className='text-white' style={{textDecoration:'none'}}>Wishlist</a><br />
       <a href="cart" className='text-white' style={{textDecoration:'none'}}>Cart</a><br />
       </Col>


       <Col lg={3} md={3}>
       <h4>Guides</h4>
       <h6>react</h6>
       <h6>react bootstrap</h6>
       <h6>routing</h6>
       </Col>


       <Col lg={3} md={3}>
       <h4 className='text-white'>Contact Us</h4>
       <input className='w-100 p-1' type="text" name="" id="" placeholder='enter email' /><br /><br />
       <button className='bg-success text-white w-100 p-1'>Send</button>
       <div >
         <i style={{ marginLeft: '3rem' }} class="fa-brands fa-instagram"></i>
         <i  style={{ marginLeft: '3rem' }} class="fa-brands fa-facebook"></i>
         <i style={{ marginLeft: '3rem' }}class="fa-brands fa-twitter"></i>
         <i style={{ marginLeft: '3rem' }}class="fa-brands fa-github"></i>
       </div>

       
       </Col>


      </Row>
    </Container>


   </div>

  )
}

export default Footer