import React from 'react'
import { useGlobalContext } from '../context'

const CartContainer = () => {
    const {total, clearCart, cart} = useGlobalContext()

    
   
    return (
        <div className="cart">
           <section>Total: ${total} </section> 
           
        </div>
       
    )
}

export default CartContainer
