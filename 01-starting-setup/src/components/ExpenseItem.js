import React from 'react'
import './expenseItem.css'

function ExpenseItem({title, date, amount}) {
    
  return (
    <div className='expense-item'>
     <div className="expense-item__description">
<div>{date.toISOString()}</div>
     </div>
<h2>{title}</h2>
<div className="expense-item__price">${amount}</div>
    </div>
  )
}

export default ExpenseItem
