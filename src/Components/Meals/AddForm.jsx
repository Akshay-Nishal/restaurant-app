import React, { useContext, useRef } from 'react'
import './AddForm.css'
import { CartListContext } from '../../Contexts/CartContext'



export default function AddForm(props) {
  const quanRef = useRef()
  const ctx = useContext(CartListContext)
    const item = props.data
    const addToCard =(event)=>{
        event.preventDefault()
        let tem={
          ...item,
          quantity : parseInt(quanRef.current.value)
        }
        ctx.onAdd(tem)
        quanRef.current.value = 1

    }
  return (
    <form onSubmit={addToCard}>
        <label htmlFor="quantity">Amount</label>
        <input ref={quanRef} type="number" id="quantity" min={1} max={5} />
        <br />
        <button type='submit'>+Add</button>
    </form>
  )
}
