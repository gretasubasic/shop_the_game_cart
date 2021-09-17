import React from 'react'
import { useGlobalContext } from '../context'

const Amount = ({id, }) => {
    const {  increase, decrease, amount } = useGlobalContext()
    
    return (
       <>
       This is the amount
       <button onClick={() => increase(id)}>Add to the cart</button>
       <h1>{amount}</h1>
       </>
    )
}

export default Amount
