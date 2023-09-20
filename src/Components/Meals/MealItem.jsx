import React from 'react'
import './Meals.css'

function MealItem(props) {
    const item = props.data
    console.log(props.data)
  return (
    <div className='list-item'>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <b className='price'>${item.price}</b>
    </div>
  )
}

export default MealItem
