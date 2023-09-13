import React from 'react'
import './expenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
     <div className="expense-item__description">
<div>March 28th 2021</div>
     </div>
<h2>Car Insurance</h2>
<div className="expense-item__price">$294</div>
    </div>
  )
}

export default ExpenseItem
