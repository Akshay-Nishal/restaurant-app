import React, { useContext, useRef } from 'react'
import './AddForm.css'
import { CartListContext } from '../../Contexts/CartContext'



export default function AddForm(props) {
  const quanRef = useRef()
  const ctx = useContext(CartListContext)
    let item = props.data
    const addToCard =(event)=>{
        event.preventDefault()
        let quantityToAdd = parseInt(quanRef.current.value)
        item={...item,amount:quantityToAdd}
        ctx.onAdd(item)
        quanRef.current.value = 1

    }
  return (
    <form onSubmit={addToCard}>
        <label htmlFor="quantity">Amount</label>
        <input value={1} ref={quanRef} type="number" id="quantity" min={1} max={5} />
        <br />
        <button type='submit'>+Add</button>
    </form>
  )
}
