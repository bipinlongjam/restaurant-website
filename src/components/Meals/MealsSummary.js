import React from 'react'
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Best Delicious Food </h2>
        <p>
            Choose your favorite meal from board selection of 
            the available meals and enjoy a delicious lunch or dinner at your home.
        </p>
        <p>
            All our meals are cooked with high-quality ingridents, just-in-time, fastest-delivery 
            and of course by experienced chefs.
        </p>
    </section>
  )
}

export default MealsSummary