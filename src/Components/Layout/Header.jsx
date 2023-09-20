import React from 'react'
import mealsBackground from '../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <>
    <header className={classes.header}>
        <h1>RealMeals</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsBackground} alt='MEALSSS' />
    </div>

    </>
  )
}

export default Header
