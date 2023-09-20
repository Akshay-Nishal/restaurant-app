import React, { useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
    
  return (
    <button onClick={props.changeCartShow} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            4
        </span>
    </button>
  )
}
