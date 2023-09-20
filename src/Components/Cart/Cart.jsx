import React, { useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart(props) {
  if(!props.show) return null;
  const CartItems = (
    <ul className={classes['cart-items']}>
      {[{id:'c1',name:'Sushi',amount:2,price:12.99}].map((item)=>{
        <li>{item.name}</li>
      })}

    </ul>
  )
  return (
    <Modal changeCartShow={props.changeCartShow}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.25</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.changeCartShow} className={classes['button--alt']} >Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  )
}

export default Cart
