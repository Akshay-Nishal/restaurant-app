import React, { Fragment } from 'react'
import { useContext } from "react";
import MealItem from './MealItem';
import { MealsListContext } from '../../Contexts/ItemsContext';
import './Meals.css'
import AddForm from './AddForm';

function Meals() {
    const {mealsList} = useContext(MealsListContext)
    // console.log(mealsList)
  return (
    <div className='mealslist-body'>
        {mealsList.map((item)=>{
        return(
            <MealItem key={item.id} data={item}/>
            )
        })}
    </div>
  )
}

export default Meals