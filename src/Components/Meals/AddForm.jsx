import React from 'react'
import './AddForm.css'

export default function AddForm(props) {
    const item = props.data
    const addToCard =(event)=>{
        event.preventDefault()
        console.log('Added : ',item.name);

    }
  return (
    <form onSubmit={addToCard}>
        <label htmlFor="quantity">Amount</label>
        <input type="number" id="quantity" min={0} />
        <br />
        <button type='submit'>+Add</button>
    </form>
  )
}
