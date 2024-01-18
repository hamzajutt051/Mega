import React from 'react'
import './css/Home.css'
import Cart from '../components/Cart'
const Home = () => {
  return (
   <>
  
  <section>
    <div className='container'>
        <div className='home-parent'>
<h2>Results</h2>
<div className='cart-flex'>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
</div>
        </div>

    </div>
 </section>

  
   
   </>
  )
}

export default Home