import React, { useContext, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { CartListContext } from '../../Contexts/CartContext'

export default function HeaderCartButton(props) {
  const ctx = useContext(CartListContext)
    
  return (
    <button onClick={props.changeCartShow} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
          {ctx.cartNumber}
        </span>
    </button>
  )
}
