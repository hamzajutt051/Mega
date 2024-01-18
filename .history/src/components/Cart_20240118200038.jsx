import React, { useState } from 'react'
import '../components/Cart.css'
import img3 from '../assets/images/image3.png'

import { FaRegStar } from "react-icons/fa";

const Cart = () => {
  
    const [cart, setCart] = useState(false);
    
     
  return (
   <>
 <div className='cart-parent'>
<div className='image flex' >
    <img src={img3}/>
    <div className='btn-cart'
        onClick={()=>{
            setCart(!cart)
        }}
    >{
        cart ? "View Cart" : "Add to Cart"
    }
    </div>
  
</div>
<div className='cart-sub-listings'>
    <h3>Galaxy S22 Ultra</h3>
    <h4>$329.99</h4>
    <div className='rating'>rating</div>
</div>
  <div className='discount'>
50%
<br/>
off
    </div>
 </div>

   </>
  )
}

export default Cart