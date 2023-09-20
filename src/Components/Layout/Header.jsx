import React, { useState } from 'react'
import mealsBackground from '../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import Summary from './Summary'

function Header(props) {
    return (
    <>
    <header className={classes.header}>
        <h1>RealMeals</h1>
        <HeaderCartButton changeCartShow={props.changeCartShow}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsBackground} alt='MEALSSS' />
    </div>
    <Summary/>
    </>
  )
}

export default Header
