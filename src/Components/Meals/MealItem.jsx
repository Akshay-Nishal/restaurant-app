import React from 'react'
import './Meals.css'
import AddForm from './AddForm'

function MealItem(props) {
    const item = props.data
    // console.log(props.data)
  return (
    <div className='list-item'>
        <div className='meal-info'>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <b className='price'>${item.price}</b>
        </div>
        <div className='add-form'>
            <AddForm data={item}/>
        </div>
    </div>
  )
}

export default MealItem
