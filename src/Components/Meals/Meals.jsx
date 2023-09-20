import React, { Fragment } from 'react'
import { useContext } from "react";
import MealItem from './MealItem';
import { MealsListContext } from '../../Contexts/ItemsContext';
import './Meals.css'

function Meals() {
    const {mealsList} = useContext(MealsListContext)
    console.log(mealsList);
  return (
    // <center>
    <div className='mealslist-body'>
        <div className='mealslist'>
        {mealsList.map((item)=>{
        return(
            <MealItem key={item.id} data={item}/>
            )
        })}
        </div>
    </div>
    // {/* </center> */}
  )
}

export default Meals